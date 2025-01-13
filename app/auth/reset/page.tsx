"use client";

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<'request' | 'confirm'>('request');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await resetPassword({ username: email });
      setStep('confirm');
    } catch (err) {
      console.error('Reset request error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const code = formData.get('code') as string;
    const newPassword = formData.get('newPassword') as string;

    try {
      await confirmResetPassword({
        username: email,
        confirmationCode: code,
        newPassword
      });
      router.push('/auth?reset=success');
    } catch (err) {
      console.error('Reset confirmation error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-sm border border-border p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-primary mb-2">
              Reset Password
            </h1>
            <p className="text-muted-foreground">
              {step === 'request' 
                ? 'Enter your email to reset your password'
                : 'Enter the verification code sent to your email'
              }
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 text-sm text-red-500 bg-red-50 rounded-md">
              {error}
            </div>
          )}

          {step === 'request' ? (
            <form onSubmit={handleRequestReset} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Code'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleConfirmReset} className="space-y-4">
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

              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter new password"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Resetting...' : 'Reset Password'}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link
              href="/auth"
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}