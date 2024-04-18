import Link from "next/link";

const TnCLink = () => {
  return (
    <div className="text-sm">
      * This site is protected by reCAPTCHA and the Google
      <Link
        href={"https://policies.google.com/privacy"}
        target="_blank"
        className="mx-1 text-blue-600 border-b border-b-blue-600"
      >
        Privacy Policy
      </Link>
      and
      <Link
        href={"https://policies.google.com/terms"}
        target="_blank"
        className="mx-1 text-blue-600 border-b border-b-blue-600"
      >
        Terms of Service
      </Link>
      apply.
    </div>
  );
};

export default TnCLink;
