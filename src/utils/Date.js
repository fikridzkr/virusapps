import React from "react";

export default function Dates() {
  const namabulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const date = new Date();
  const menit = date.getMinutes();
  const jam = date.getHours();
  const hari = date.getDay();
  const tanggal = date.getDate();
  const bulan = date.getMonth();
  const tahun = date.getFullYear();

  const today = `${tanggal}-${namabulan[bulan]}-${tahun}, ${jam} : ${menit}`;
  return (
    <p className="ubuntu">
      Update terakhir: <br />
      <strong>{today}</strong>
    </p>
  );
}
