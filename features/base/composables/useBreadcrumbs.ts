export const useBreadcrumbs = () => {
  const router = useRouter()
  const route = useRoute()
  const routes = router.getRoutes()

  const breadcrumbs = []
  return breadcrumbs
}
