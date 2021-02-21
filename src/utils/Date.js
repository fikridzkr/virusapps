import React from "react";

export default function Dates() {
  // const namabulan = [
  //   "Januari",
  //   "Februari",
  //   "Maret",
  //   "April",
  //   "Mei",
  //   "Juni",
  //   "Juli",
  //   "Agustus",
  //   "September",
  //   "Oktober",
  //   "November",
  //   "Desember",
  // ];
  const date = new Date();
  const dates = date.toLocaleString();
  return (
    <p className="ubuntu">
      Update terakhir: <br />
      <strong>{dates}</strong>
    </p>
  );
}
