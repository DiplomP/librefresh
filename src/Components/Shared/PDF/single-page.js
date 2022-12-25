import { Button } from "@mui/material";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './single-page.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        noData=''
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="navigation">
        <p>
          Страница {pageNumber || (numPages ? 1 : "--")} из {numPages || "--"}
        </p>
		<div>
		<div className="buttons">
			<Button variant="contained" disabled={pageNumber <= 1} onClick={previousPage}>Предыдущая</Button>
			<Button variant="contained" disabled={pageNumber >= numPages} onClick={nextPage}>Следующая</Button>
		</div>
		</div>
      </div>
    </>
  );
}