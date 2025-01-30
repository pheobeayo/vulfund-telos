import { FaArrowUp } from "react-icons/fa";
import useVote from "../hooks/useVote";

const Vote = ({ id }) => {
  const handleVote = useVote()
  const handleUpVote = async () => {
    await handleVote(id)
  }
  return (
    <div>
      <input
        type="text"
        value={id}
        className="text-white rounded-lg w-[100%] p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none hidden"
      />
      <button className="bg-transparent w-[100%] py-2 text-white mb-2 rounded-xl border-white border flex gap-2 p-2 place-content-center" onClick={handleUpVote}>
        <FaArrowUp /> Upvote
      </button>
    </div>
  );
};

export default Vote;
