import EmailClient "mo:caffeineai-email/emailClient";

actor {
  public func submitInquiry(message : Text) : async Text {
    let subject = "Secure Communication \u{2014} Operational Inquiry Received";
    let htmlBody = "<h2>Operational Inquiry Received</h2><p>" # message # "</p><hr/><p><em>Submitted anonymously via Gulag DAO Secure Communication portal.</em></p>";

    let result = await EmailClient.sendRawEmail(
      "noreply",
      ["CaptainProton1672@proton.me"],
      [],
      [],
      subject,
      htmlBody,
    );

    switch result {
      case (#ok) { "Transmission received. Your inquiry has been logged." };
      case (#err(e)) { "Transmission failed: " # e };
    };
  };
};
