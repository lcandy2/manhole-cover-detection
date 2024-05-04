'use client';

import { Title } from '@tremor/react';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Loader, MantineProvider } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'flowbite-react';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function IndexPage({
                                          searchParams
                                        }: {
  searchParams: { q: string };
}) {

  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [status, setStatus] = useState(0);

  const previews = (files: FileWithPath[]) => {
    const file = files[0];
    if (!file) {
      return null;
    }
    const imageUrl = URL.createObjectURL(file);
    return <img className="max-w-96 max-h-80 mb-3 text-gray-400" src={imageUrl} alt={'上传的图片'}
                onLoad={() => URL.revokeObjectURL(imageUrl)} />;
  };

  useEffect(() => {
    if (files.length > 0) {
      setStatus(1);
      setTimeout(() => {
        setStatus(2);
      }, 3000);
    }
  }, [files]);

  return (
    <MantineProvider>
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title className="pb-4">测试井盖</Title>
        <section className="flex flex-row gap-2">
          <div className="flex items-center justify-center w-full">
            <Dropzone
              onDrop={setFiles}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={5 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {files.length ?
                  <React.Fragment>{previews(files)}<p
                    className="text-xs text-gray-500 dark:text-gray-400">已选择图片: {files[0].name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">点击或拖拽来替换图片</p>
                  </React.Fragment> :
                  <React.Fragment>
                    <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                      className="font-semibold">点击 </span> 或 拖拽到此处 来选择图片</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG 或 GIF (最大 10MB)</p>
                  </React.Fragment>}

              </div>
            </Dropzone>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap -2">
            {(status === 0) ?
              <p className="text-xs text-gray-500 dark:text-gray-400">识别后的井盖将显示在这里</p> : (status === 1) ?
                <><Spinner aria-label="Default status example" />分析中</> : (status === 2) ?
                  <><img src="/result.jpg" alt="placeholder" width="328" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">井盖破损 (broken)</p>
                  </> : null}
          </div>
        </section>
      </main>
    </MantineProvider>
  )
    ;
}
