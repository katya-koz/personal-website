import "../../App.scss";

const PDF = ({ PDFSource }) => {
  return (
    <embed
      className="pdf"
      src={`${PDFSource}#toolbar=0&navpanes=0`}
      type="application/pdf"
    />
  );
};
export default PDF;
