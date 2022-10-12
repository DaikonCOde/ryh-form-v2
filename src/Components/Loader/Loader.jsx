import LoaderAnimation from '../../assets/Medihair_Loader.svg';

function Loader() {

  const GetNumberOfClinics = () => {
    return Math.floor((Math.random() * (20 - 8 + 1)) + 8);
  }

  return (
    <>
      <img className='animate' style={{width: '180px',height: '180px'}} src={LoaderAnimation} alt="" />
      <span className="label-search">Se han encontraron {GetNumberOfClinics() } clínicas que coinciden.  </span>
    </>
  )
}

export default Loader