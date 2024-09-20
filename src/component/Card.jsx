/* eslint-disable react/prop-types */

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.img} alt="image" />
      <div className="info">
        <span>M</span>
        <div className="title">
          <h3>{data.title} </h3>
          <p>{data.name} </p>
          <p>
            {data.views} Views * {data.date} months ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
