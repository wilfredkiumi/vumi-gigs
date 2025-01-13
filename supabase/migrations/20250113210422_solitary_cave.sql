/*
  # Account Types and Profiles Schema

  1. New Tables
    - `account_types`
      - Stores user account type information
    - `creator_profiles`
      - For creative talent profiles
    - `influencer_profiles`
      - For influencer profiles with metrics
    - `business_profiles`
      - For brand/business accounts

  2. Security
    - Enable RLS on all tables
    - Add policies for data access control
*/

-- Account Types Table
CREATE TABLE IF NOT EXISTS account_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  type text NOT NULL CHECK (type IN ('personal', 'business')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Creator Profiles Table
CREATE TABLE IF NOT EXISTS creator_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  bio text,
  avatar_url text,
  location text,
  specialties text[],
  experience_years integer,
  portfolio_urls text[],
  hourly_rate decimal,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Influencer Profiles Table
CREATE TABLE IF NOT EXISTS influencer_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  bio text,
  avatar_url text,
  location text,
  categories text[],
  social_links jsonb,
  metrics jsonb,
  rate_card jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Business Profiles Table
CREATE TABLE IF NOT EXISTS business_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  business_name text NOT NULL,
  website text,
  industry text,
  size text,
  description text,
  contact_info jsonb,
  verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE account_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE creator_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE influencer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_profiles ENABLE ROW LEVEL SECURITY;

-- Account Types Policies
CREATE POLICY "Users can read own account type"
  ON account_types
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own account type"
  ON account_types
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Creator Profiles Policies
CREATE POLICY "Creator profiles are publicly readable"
  ON creator_profiles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own creator profile"
  ON creator_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Influencer Profiles Policies
CREATE POLICY "Basic influencer info is publicly readable"
  ON influencer_profiles
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM account_types
      WHERE user_id = auth.uid()
      AND type = 'business'
    )
    OR (
      -- Only show basic info for non-business accounts
      auth.uid() != user_id
      AND (
        SELECT type FROM account_types WHERE user_id = auth.uid()
      ) != 'business'
    )
  );

CREATE POLICY "Users can update own influencer profile"
  ON influencer_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Business Profiles Policies
CREATE POLICY "Business profiles are readable by authenticated users"
  ON business_profiles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own business profile"
  ON business_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Functions for profile type checks
CREATE OR REPLACE FUNCTION is_business_account(user_uuid uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM account_types
    WHERE user_id = user_uuid
    AND type = 'business'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION can_view_influencer_metrics(viewer_uuid uuid, profile_uuid uuid)
RETURNS boolean AS $$
BEGIN
  RETURN (
    -- Business accounts can view all metrics
    EXISTS (
      SELECT 1 FROM account_types
      WHERE user_id = viewer_uuid
      AND type = 'business'
    )
    -- Users can view their own metrics
    OR viewer_uuid = profile_uuid
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;