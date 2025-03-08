export default function Home(props: { params: { id: string}}) {
  return (
    <span>
      Page for id: {props.params.id}
    </span>
  )
}