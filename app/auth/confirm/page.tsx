"use client";

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ConfirmPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const email = searchParams.get('email') || '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const code = formData.get('code') as string;

    try {
      await confirmSignUp({
        username: email,
        confirmationCode: code
      });
      router.push('/auth?verified=true');
    } catch (err) {
      console.error('Confirmation error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      await resendSignUpCode({ username: email });
      alert('Verification code has been resent to your email');
    } catch (err) {
      console.error('Resend code error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-sm border border-border p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-primary mb-2">
              Verify Your Email
            </h1>
            <p className="text-muted-foreground">
              Enter the verification code sent to your email
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 text-sm text-red-500 bg-red-50 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="code">Verification Code</Label>
              <Input
                type="text"
                id="code"
                name="code"
                placeholder="Enter verification code"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify Email'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Didn't receive the code?{' '}
            <button
              onClick={handleResendCode}
              className="text-primary hover:text-primary/90"
            >
              Resend Code
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/auth"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="inline h-4 w-4 mr-1" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}