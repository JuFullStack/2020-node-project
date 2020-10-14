import axios from "axios"

export const getMusicList = async () => {
    // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
    const response = await axios.get("http://localhost:5000/musicList");
    return response.data;
};
  
export const getMusic = async({id}) => {
      // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
    const response = await axios.get(`http://localhost:5000/musicList/${id}`);
    return response.data;
  };