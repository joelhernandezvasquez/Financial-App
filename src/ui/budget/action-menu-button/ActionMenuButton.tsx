'use client';
import Image from "next/image";

const ActionMenuButton = () => {
  return (
    <button>
      <Image
       width={16}
       height={16}
       src={'/assets/dots.svg'}
       alt=""
      />
    </button>
  )
}

export default ActionMenuButton