// import { cookies } from 'next/headers';
// import DismissButton from './dismiss-button';

import Link from 'next/link';

export default function Toast() {
  // const cookieStore = cookies();
  // const isHidden = cookieStore.get('template-banner-hidden');

  return (
    <div className="sticky rounded-2xl w-11/12 sm:w-[581px] h-40 sm:h-[80px] p-0.5 z-10 bottom-10 left-0 right-0 mx-auto">
      <div className="rounded-[14px] w-full h-full bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-3 sm:space-y-0 px-5">
        <p className="text-black text-[13px] font-mono w-[324px] h-10 flex items-center justify-center p-3">
          2024年（第17届）中国大学生计算机设计大赛作品<br />华中赛区 - 湖南农业大学 - 2024033416
        </p>
        <Link
          className="text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[200px] h-10 flex items-center justify-center whitespace-nowrap"
          href="submit"
          rel="noreferrer"
        >
          跳转到识别井盖页面
        </Link>
      </div>
    </div>
  );
}
