import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define Zod schema
const referralSchema = z.object({
  referrerName: z.string().min(1, 'Referrer name is required'),
  referrerEmail: z.string().email('Invalid email address'),
  refereeName: z.string().min(1, 'Referee name is required'),
  refereeEmail: z.string().email('Invalid email address'),
});

type ReferralFormData = z.infer<typeof referralSchema>;

const ReferralModal = ({ onClose }: { onClose: () => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
  });

  const onSubmit = (data: ReferralFormData) => {
    console.log(data);
    // Handle form submission, e.g., send data to backend
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl mb-4">Referral Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Name</label>
            <input
              type="text"
              {...register('referrerName')}
              className="w-full border rounded px-3 py-2"
            />
            {errors.referrerName && <p className="text-red-500">{errors.referrerName.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Email</label>
            <input
              type="email"
              {...register('referrerEmail')}
              className="w-full border rounded px-3 py-2"
            />
            {errors.referrerEmail && <p className="text-red-500">{errors.referrerEmail.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Name</label>
            <input
              type="text"
              {...register('refereeName')}
              className="w-full border rounded px-3 py-2"
            />
            {errors.refereeName && <p className="text-red-500">{errors.refereeName.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Email</label>
            <input
              type="email"
              {...register('refereeEmail')}
              className="w-full border rounded px-3 py-2"
            />
            {errors.refereeEmail && <p className="text-red-500">{errors.refereeEmail.message}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
            <button 
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
