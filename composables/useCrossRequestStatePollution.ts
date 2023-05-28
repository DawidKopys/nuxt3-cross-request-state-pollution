const counter = ref(0)

export const useCrossRequestStatePollution = () => {
  // const counter = useState(() => 0)

  const increment = () => {
    counter.value++
  }
  
  return {
    counter,
    increment
  }
}
