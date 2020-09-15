import React from "react";

function Music({ music, onRemove, onToggle }) {
  const { id, title, singer, active } = music;
  const style = {
    color: active ? "blue" : "black",
    cursor: "Pointer",
  };
  return (
    <>
      <div>
        <b style={style} onClick={() => onToggle(id)}>
          {title}
        </b>
        ({singer})<button onClick={() => onRemove(id)}>삭제</button>
      </div>
    </>
  );
}

function MusicList({ musicList, onRemove, onToggle }) {
  return (
    <>
      {musicList.map((music) => (
        <Music
          key={music.id}
          music={music}
          onRemove={onRemove}
          onToggle={onToggle}
        ></Music>
      ))}
    </>
  );
}

export default MusicList;
