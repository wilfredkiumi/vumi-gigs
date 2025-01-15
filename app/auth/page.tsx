"use client";

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState<'personal' | 'business'>('personal');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      if (isLogin) {
        // TODO: Implement actual login logic
        console.log('Login:', { email, password });
        router.push('/');
      } else {
        if (accountType === 'business') {
          const companyName = formData.get('companyName') as string;
          const country = formData.get('country') as string;
          
          // TODO: Implement actual business signup logic
          console.log('Business Signup:', { 
            email, 
            password, 
            companyName, 
            country,
            accountType 
          });
          router.push('/');
          return;
        }

        // TODO: Implement actual personal signup logic
        const name = formData.get('name') as string;
        console.log('Signup:', { email, password, name, accountType });
        router.push('/');
      }
    } catch (err) {
      console.error('Auth error:', err);
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
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-muted-foreground">
              {isLogin 
                ? 'Sign in to continue to Vumi' 
                : 'Join Vumi to connect with creators and influencers'
              }
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 text-sm text-red-500 bg-red-50 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="mb-6">
                <Label className="block text-sm font-medium mb-2">Account Type</Label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAccountType('personal')}
                    className={`p-4 text-center rounded-lg border ${
                      accountType === 'personal'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-medium mb-1">Personal</div>
                    <div className="text-xs text-muted-foreground">
                      For individual creators and freelancers
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType('business')}
                    className={`p-4 text-center rounded-lg border ${
                      accountType === 'business'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-medium mb-1">Business</div>
                    <div className="text-xs text-muted-foreground">
                      For brands and agencies
                    </div>
                  </button>
                </div>
              </div>
            )}

            {!isLogin && accountType === 'business' && (
              <>
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter your company's country"
                    required
                  />
                </div>
              </>
            )}

            {!isLogin && accountType === 'personal' && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                  />
                  <Label htmlFor="remember" className="ml-2 text-muted-foreground">
                    Remember me
                  </Label>
                </div>
                <Link href="/auth/reset" className="text-primary hover:text-primary/90">
                  Forgot password?
                </Link>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-primary hover:text-primary/90"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-primary hover:text-primary/90"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}