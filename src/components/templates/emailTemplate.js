export function EmailTemplate(props) {
  const { url, formdata, data, respond } = props;

  return (
    <html lang="en">
      {
        respond ?
        <>
          <p style={{ padding: 5 }}>{data.autoRespond}</p>
        </>
        : 
        <>
          <p style={{ padding: 5, fontWeight: "700", fontSize: "20px"  }}>New submission 👋</p>
          <p style={{ padding: 5, fontWeight: "700"  }}>You have a new submission from {formdata.email || formdata.fullname || formdata.name} in your {data.title} endpoint</p>
          {
            Object.keys(formdata).splice(0, 3).map((key, index) => (
              <div key={index} style={{ lineHeight: "15px", marginBlock: "5px", padding: 10, backgroundColor: "rgba(100, 100, 100, 0.2)" }}>
                <p style={{ paddingInline: 5, pTransform: "uppercase" }} >{key}:</p>
                <p style={{ paddingInline: 5,  }}>{formdata[key]}</p>
              </div>
          ))
          }
          <button style={{ padding: 10, borderRadius: 5, margin: 5, marginTop: 10, backgroundColor: "#6252f2", color: "#fff" }} href={url}>Check it out here</button>

          <div style={{ display: "flex", justifyContent: "center", marginBlock: 20 }}>Get all your form submissions using our endpoints generator. <a href="https://formilio.com" style={{ color: "#6252f2" }}>Check it out</a></div>
          
          <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>If you have any questions, feedback, ideas or problems don't hesitate to contact us! support@formilio.com</div>
          <div style={{ display: "flex", justifyContent: "center" }}>Formilio @Copyright {new Date().getFullYear()} || Designed and created by <a href="https://abelo.tech" style={{ color: "#6252f2" }}>Abelo</a></div>
        </>
      }
    </html>
  );
}
