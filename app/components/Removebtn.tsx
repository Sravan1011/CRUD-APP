import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

  interface RemoveBtnProps {
    id: string; 
}
export default function RemoveBtn({ id }: RemoveBtnProps) {
 

  return (
    <button className="text-green-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
