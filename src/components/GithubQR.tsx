import React from "react";
// import qrImage from 

const repoUrl = "https://github.com/nazreen/solana-client-only";

const GithubQR = () => {
  return (
    <a
      href={repoUrl}
      className="lg:fixed bottom-2 right-5 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Github
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={200}
          height={200}
          src={"/repo-qr.png"}
          alt="Github Link to APU Solana Hands On"
        />
      </div>
    </a>
  );
};

export default GithubQR;
