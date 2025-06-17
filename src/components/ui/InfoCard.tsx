interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="shadow-02 flex flex-col items-center gap-[1rem] border-b border-(--primary-color) bg-[#FAF8F5] p-[3rem] text-center transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da]">
      <div className="text-(--primary-color)">{icon}</div>

      <div className="flex flex-col gap-[.5rem]">
        <h3 className="text-[2rem] leading-[3rem] font-medium tracking-[-0.36px]">
          {title}
        </h3>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
