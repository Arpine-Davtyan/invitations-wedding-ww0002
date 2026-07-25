
type TitleProps = {
  title: string;
};

const Title = ( { title } : TitleProps) => {
  return (
    <div className="flex-center gap-5 my-8">
      <div className="w-12 h-px bg-primary opacity-25" />
      <h4>{title}</h4>
      <div className="w-12 h-px bg-primary opacity-25" />
    </div>
  )
}

export default Title
