import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Button } from '@react-email/button';

export function EmailTemplate(props) {
  const { url, formdata, title } = props;

  return (
    <Html lang="en">
        <Text style={{ padding: 5, fontWeight: "700", fontSize: "20px"  }}>Hi 👋</Text>
        <Text style={{ padding: 5, fontWeight: "700"  }}>You have a new submission from {formdata.email} in your {title} endpoint</Text>
        {
           Object.keys(formdata).splice(0, 3).map((key, index) => (
            <div key={index} style={{ lineHeight: "15px", marginBlock: "5px", padding: 10, backgroundColor: "rgba(100, 100, 100, 0.2)" }}>
              <Text style={{ paddingInline: 5, textTransform: "uppercase" }} >{key}:</Text>
              <Text style={{ paddingInline: 5,  }}>{formdata[key]}</Text>
            </div>
        ))
        }
        <Button style={{ padding: 10, borderRadius: 5, margin: 5, backgroundColor: "#6252f2", color: "#fff" }} href={url}>🔍 Check it out here</Button>
    </Html>
  );
}
