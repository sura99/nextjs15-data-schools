const StudentPovertyTable = () => {
  const data = [
    {
      id: 1,
      ministryCode: "1067380152",
      schoolName: "บ้านท่าโรง",
      primary: {
        dmcApplied: 38,
        cctApplied: 0,
        screened: 13,
        allocated: 11,
        poor: 4,
        veryPoor: 7,
        budget: 5500
      },
      secondary: {
        dmcApplied: 0,
        cctApplied: 0,
        screened: 0,
        allocated: 0,
        poor: 0,
        veryPoor: 0,
        budget: 0
      }
    }
    // สามารถเพิ่มข้อมูลเพิ่มเติมที่นี่
  ];

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full text-sm bg-white">
        <thead>
          <tr className="bg-blue-100">
            <th rowSpan={3} className="p-2 border">ที่</th>
            <th rowSpan={3} className="p-2 border">รหัส 10 หลัก (กระทรวง)</th>
            <th rowSpan={3} className="p-2 border">ชื่อโรงเรียน</th>
            <th colSpan={8} className="p-2 border text-center bg-yellow-100">ระดับประถมศึกษา * 500 บาท</th>
            <th colSpan={8} className="p-2 border text-center bg-green-100">ระดับมัธยมศึกษาตอนต้น * 1,500 บาท</th>
          </tr>
          <tr className="bg-blue-50">
            <th colSpan={4} className="p-2 border bg-yellow-50">จำนวนนักเรียนยากจน</th>
            <th colSpan={2} className="p-2 border bg-yellow-50">จ.น.นร.ตามระดับความยากจน</th>
            <th rowSpan={2} className="p-2 border bg-yellow-50">งบประมาณ</th>
            <th colSpan={4} className="p-2 border bg-green-50">จำนวนนักเรียนยากจน</th>
            <th colSpan={2} className="p-2 border bg-green-50">จ.น.นร.ตามระดับความยากจน</th>
            <th rowSpan={2} className="p-2 border bg-green-50">งบประมาณ</th>
          </tr>
          <tr className="bg-blue-50">
            {/* ประถมศึกษา */}
            <th className="p-2 border">สมัครผ่าน DMC</th>
            <th className="p-2 border">สมัครผ่าน CCT</th>
            <th className="p-2 border">ทำการคัดกรอง</th>
            <th className="p-2 border">ได้รับจัดสรร</th>
            <th className="p-2 border">ยากจน</th>
            <th className="p-2 border">ยากจนพิเศษ</th>
            
            {/* มัธยมต้น */}
            <th className="p-2 border">สมัครผ่าน DMC</th>
            <th className="p-2 border">สมัครผ่าน CCT</th>
            <th className="p-2 border">ทำการคัดกรอง</th>
            <th className="p-2 border">ได้รับจัดสรร</th>
            <th className="p-2 border">ยากจน</th>
            <th className="p-2 border">ยากจนพิเศษ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-2 border text-center">{item.id}</td>
              <td className="p-2 border">{item.ministryCode}</td>
              <td className="p-2 border">{item.schoolName}</td>
              
              {/* ข้อมูลประถมศึกษา */}
              <td className="p-2 border text-center">{item.primary.dmcApplied || "-"}</td>
              <td className="p-2 border text-center">{item.primary.cctApplied || "-"}</td>
              <td className="p-2 border text-center">{item.primary.screened || "-"}</td>
              <td className="p-2 border text-center">{item.primary.allocated || "-"}</td>
              <td className="p-2 border text-center">{item.primary.poor || "-"}</td>
              <td className="p-2 border text-center">{item.primary.veryPoor || "-"}</td>
              <td className="p-2 border text-right">{item.primary.budget ? item.primary.budget.toLocaleString() : "-"}</td>
              
              {/* ข้อมูลมัธยมต้น */}
              <td className="p-2 border text-center">{item.secondary.dmcApplied || "-"}</td>
              <td className="p-2 border text-center">{item.secondary.cctApplied || "-"}</td>
              <td className="p-2 border text-center">{item.secondary.screened || "-"}</td>
              <td className="p-2 border text-center">{item.secondary.allocated || "-"}</td>
              <td className="p-2 border text-center">{item.secondary.poor || "-"}</td>
              <td className="p-2 border text-center">{item.secondary.veryPoor || "-"}</td>
              <td className="p-2 border text-right">{item.secondary.budget ? item.secondary.budget.toLocaleString() : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPovertyTable;