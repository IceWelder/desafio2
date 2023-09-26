import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function Card({ imageSrc, title, description }: CardProps) {
  return (
    <div className="card">
      <Image src={imageSrc} alt={title} width={300} height={200} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
