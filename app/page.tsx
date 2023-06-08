import {getBlogs} from '@/server/blogs';
import {GetServerSideProps} from 'next';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300 font-poppins">
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">Welcome to Blog of HiDuck</h1>
          <p>A full-stack blog made with Next.js</p>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(222222);
  const blogs = getBlogs();
  return {
    props: {},
  };
};
