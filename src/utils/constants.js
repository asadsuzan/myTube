import { AiFillHome } from 'react-icons/ai'
import { BiCodeAlt, BiFemale, BiHappy } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import { FaUniversity } from 'react-icons/fa'
import { GiClothes, GiGamepad } from 'react-icons/gi'
import { GrBitcoin } from 'react-icons/gr'
import { HiMusicNote } from 'react-icons/hi'
import { MdOutlineLiveTv, MdOutlineSportsKabaddi } from 'react-icons/md'
import { RiMovieFill } from 'react-icons/ri'
import { SiGooglepodcasts } from 'react-icons/si'

export const categories = [
  { name: 'New', icon: <AiFillHome />, },
  { name: 'Thapa Technical', icon: <BiCodeAlt />, },
  { name: 'Coding', icon: <BiCodeAlt />, },
  { name: 'ReactJS', icon: <BiCodeAlt />, },
  { name: 'NextJS', icon: <BiCodeAlt />, },
  { name: 'Music', icon: <HiMusicNote /> },
  { name: 'Education', icon: <FaUniversity />, },
  { name: 'Podcast', icon: <SiGooglepodcasts />, },
  { name: 'Movie', icon: <RiMovieFill />, },
  { name: 'Gaming', icon: <GiGamepad />, },
  { name: 'Live', icon: <MdOutlineLiveTv />, },
  { name: 'Sport', icon: <MdOutlineSportsKabaddi />, },
  { name: 'Fashion', icon: <GiClothes />, },
  { name: 'Beauty', icon: <BiFemale />, },
  { name: 'Comedy', icon: <BiHappy />, },
  { name: 'Gym', icon: <CgGym />, },
  { name: 'Crypto', icon: <GrBitcoin />, },
];