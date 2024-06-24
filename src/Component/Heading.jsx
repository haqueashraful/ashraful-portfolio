const Heading = ({ text }) => {
  return (
    <div className="text-left text-5xl">
      <h1 className="font-bold bg-gradient-to-tl from-[#f956b3] to-[#ec7a1d] text-transparent bg-clip-text">
        {text}
        <span className="text-[#6E06F2] text-5xl">.</span>
      </h1>
    </div>
  );
};

export default Heading;
