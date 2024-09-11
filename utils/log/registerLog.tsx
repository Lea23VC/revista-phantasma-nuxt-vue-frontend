const config = useRuntimeConfig();

export async function registerLog(visitedUrl: string) {
  await $fetch(`${config.public.backendEndpoint}/api/ip-logs`, {
    method: "POST",
    body: {
      visited_url: visitedUrl, // Send the visited URL to the backend
    },
  });
}
