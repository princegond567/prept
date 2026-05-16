import { getCallData } from '@/actions/call';
import { notFound, redirect } from 'next/navigation';
import React from 'react'

import CallRoom from './_components/CallRoom';

const CallPage = async ({ params }) => {
  const { callId } = await params;

  const result = await getCallData(callId);

  if(result.error === "Unauthorized") {
    redirect("/");
  }
  if(result.error === "Call not found") {
    notFound();
  }
  if(result.error === "Forbidden") {
    redirect("/")
  }

  const { token, isInterviewer, currentUser, booking } = result; 
  
  return (
    <CallRoom 
        callId={callId}
        token={token}
        apiKey={process.env.NEXT_PUBLIC_STREAM_API_KEY}
        currentUser={currentUser}
        booking={booking}
        isInterviewer={isInterviewer}
    />
  );
};

export default CallPage