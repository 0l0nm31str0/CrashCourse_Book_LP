import React, { useState } from 'react';

interface EmailFormProps {
  buttonLabel?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ 
  buttonLabel = "Get the First Chapter", 
  variant = 'light',
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubmitted(true);
      // Logic to submit email would go here
    }
  };

  if (submitted) {
    return (
      <div className={`p-6 border-l-4 border-[#FFD700] ${variant === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} ${className}`}>
        <p className="font-bold text-lg mb-1">Check your inbox!</p>
        <p className={`text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          We've sent the chapter to {email}
        </p>
      </div>
    );
  }

  const inputBg = variant === 'dark' ? 'bg-gray-800 text-white border-gray-700 focus:border-[#FFD700]' : 'bg-white text-black border-gray-300 focus:border-black';
  const placeholderColor = variant === 'dark' ? 'placeholder-gray-500' : 'placeholder-gray-400';

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-lg mx-auto ${className}`}>
      <div className="flex flex-col sm:flex-row gap-0">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full h-[54px] px-6 border outline-none transition-colors rounded-none ${inputBg} ${placeholderColor}`}
          required
        />
        <button 
          type="submit" 
          className="h-[54px] px-8 bg-[#FFD700] text-black font-semibold uppercase tracking-wide hover:bg-[#E5C100] transition-colors whitespace-nowrap"
        >
          {buttonLabel}
        </button>
      </div>
      <p className={`text-xs mt-3 text-center sm:text-left ${variant === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
        Join 5,000+ founders. Unsubscribe anytime.
      </p>
    </form>
  );
};

export default EmailForm;