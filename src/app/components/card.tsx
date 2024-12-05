import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type CardProps = {
  title: string;
  content: string;
  url: string;
};

export default function WorkCard({ title, content, url }: CardProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">もっと見る</Button>
      </Card.Body>
    </Card>
  );
}
