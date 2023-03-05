import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Button } from '@react-email/button';

export function EmailTemplate(props) {
  const { url, data, useremail, message } = props;

  return (
    <Html lang="en">
        <Text style={{ padding: 5, fontWeight: "700", fontSize: "20px"  }}>Hi {data.user} 👋</Text>
        <Text style={{ padding: 5, color: "#6252f2", fontWeight: "700"  }}>You have a new submission from {useremail} in your {data.title} endpoint</Text>
        <Text style={{ padding: 5, paddingBlock: 20  }}>{message}</Text>
        <Button style={{ padding: 5, margin: 5, border: "1px solid #6252f2", color: "#6252f2" }} href={url}>🔍 Check it out here</Button>
    </Html>
  );
}
