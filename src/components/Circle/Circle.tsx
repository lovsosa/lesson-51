import './Circle.css';

interface Props {
  content: number;
}

const Circle = ({ content }: Props) => {
  return <div className="circle">{content}</div>;
};

export default Circle;
