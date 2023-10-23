import React from 'react';
import EditTopicForm from '@/app/components/EditTopicForm';

export async function getTopicById({ id }: { id: any }) {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topic');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

interface EditTopicProps {
  params: {
    id: string;
  };
}

export default async function EditTopic({ params }: EditTopicProps) {
  const { id } = params;
  const { topic } = await getTopicById({ id });
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}

