import React from "react";

const ProjectItem = ({
  img,
  title,
  description,
  url,
  github,
  hasGithub,
  isHosted,
  underDevelopment,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg drop-shadow-lg grounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{description}</p>
        {isHosted && (
          <a href={url}>
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
              Visit
            </p>
          </a>
        )}
        {hasGithub && (
          <a href={github}>
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
              GitHub
            </p>
          </a>
        )}
        {underDevelopment ? (
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            Under Development
          </p>
        ) : (
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            Done
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
