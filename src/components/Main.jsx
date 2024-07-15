export default function Main(props) {
  const { data, handleToggleModal } = props;
  return (
    <div onClick={handleToggleModal} className="imageContainer">
      <img src={data?.hdurl} alt={data?.title || 'bg-image'} className="bgImage" />
    </div>
  );
}
