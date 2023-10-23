import Image from 'next/image'
import AddTopic from './components/AddTopic'
import TodoList from './components/TodoList'

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'> 
      <h1 className='text-2xl font-bold'>Todo List</h1>
      <AddTopic/>
      </div>
      <TodoList/>

    </main>
  )
}