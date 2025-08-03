import { NextResponse } from 'next/server';
import { User } from '../../../../../backend/model/User';
import dbConnect from '../../../../../backend/lib/mongodb';
import { generateOtp } from '../../../../../backend/utility/otpGenerator.js';

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const { email, password, name, mobile } = body;

    //check if user already exist
    const existingUser = await User.findOne({ email, isVerified: true
      
     });
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'User already exists.' }, { status: 400 });
    }
    
    // Check if user already exists but not verified
    const existingUserNotVerified = await User.findOne({ email, isVerified: false });
    if (existingUserNotVerified) {
        const VerifyCode = generateOtp();
        existingUserNotVerified.VerifyCode = VerifyCode;
        await existingUserNotVerified.save();

        // Send verification email (not implemented here, but you can use a service like Nodemailer)
      
      return NextResponse.json({ success: false, message: 'User already exists but not verified.' }, { status: 401 });
    }

    // Create new user
    const VerifyCode = generateOtp();
    const user = new User({ email, password, name, mobile, VerifyCode });
    await user.save();

    // Send verification email (not implemented here, but you can use a service like Nodemailer)

    return NextResponse.json({ success: true, message: 'User registered successfully.' });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
