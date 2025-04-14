import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/auth.action'

const Home = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ])

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;
  
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Ace Your Interviews with Smart AI-Powered Practice and Personalized Feedback.</h2>

          <p className='text-lg'>
            Work Through Real Interview Scenarios and Receive Instant Feedback.
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">
              Let’s Get Interview-Ready
            </Link>
          </Button>
        </div>

        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interviews-section'>

          {hasPastInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id}/>
              ))) : (
                <p>Looks like you haven’t started any interviews.</p> 
              )}

        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Start an Interview</h2>

        <div className='interviews-section'>
          
        {hasUpcomingInterviews ? (
              latestInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id}/>
              ))) : (
                <p>No new Interviews Available at the Moment</p>
              )}

        </div>
      </section>
    </>
  )
}

export default Home
