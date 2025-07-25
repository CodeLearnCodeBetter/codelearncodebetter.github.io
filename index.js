document.addEventListener("DOMContentLoaded", function () {
    PDFObject.embed("Resume.pdf#toolbar=0&navpanes=0&scrollbar=0", "#pdfRenderer");
    const container = document.getElementById("pdfRenderer");
//     console.log("container:" + container);
//     const height = container.style.width * 0.707;
//     container.style.width = height + "px";
//     PDFObject.embed("Kevin Scheepers CV-5.pdf", "#pdfRenderer");
//     console.log("width" + container.style.width);
// //   const header = document.getElementById("header");
//   const pdf = document.getElementById("pdfRenderer");
//     debugger;
//   const heightA = header.offsetHeight; // gets computed height of A
//   pdf.style.height = ("100vh" + heightA);
});