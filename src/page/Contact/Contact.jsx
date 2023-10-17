const Contact = () => {
  return (
    <div className=" text-3xl text-start font-medium gap-10  ">
      <div className="my-14 ">
        <table className="table md:w-1/2 border ">
          <thead className="text-center text-2xl">
            <tr className="text-center text-light-blue-300">
              Personal contact
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phone Number:</td>
              <td>01308-102789</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>HabiburrahmanOfficial@gmail.com</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>Khoddo Thampat, Nagor Mirjong, Taghat, Rangpur</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-14 flex justify-start md:justify-end">
        <table className="table w-1/2 border ">
          <thead>
            <tr className="text-center text-2xl">
              <th className="text-center text-light-blue-300">
                Social contact
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Facebook Page:</td>
              <td>https://www.facebook.com/</td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>HabiburrahmanOfficial@gmail.com</td>
            </tr>

            <tr>
              <td>Youtube Blog:</td>
              <td>https://www.youtube.com/</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-14">
        <table className="table w-1/2 border ">
          <thead className="text-center text-2xl">
            <tr className="text-center text-light-blue-300">
              Alternative Contacts
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phone Number</td>
              <td>01711-11115</td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>HabiburrahmanOfficial@gmail.com</td>
            </tr>

            <tr>
              <td>Emergency Contact:</td>
              <td>01998-874421</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
