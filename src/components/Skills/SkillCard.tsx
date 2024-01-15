type TSkillProps = {
  skillName: string;
  skillImg: string;
};

const SkillCard = ({ skillName, skillImg }: TSkillProps) => {
  return (
    <div className="bg-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-primary text-secondary hover:text-white transition-all duration-500 ease-in-out ">
      <div className="">
        <div className="p-8 flex gap-24 justify-between items-center">
          <div>
            <img className="size-32 rounded-md" src={skillImg} alt="" />
          </div>
          <div>
            <p className="block mt-1 text-lg leading-tight font-medium">
              {skillName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
