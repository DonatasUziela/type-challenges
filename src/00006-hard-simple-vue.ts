// question: https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.md

interface VueParams<TData extends {}, TComputed extends { [key: string]: () => any }, TMethods extends {}> {
    data: () => TData;
    computed: TComputed & ThisType<TData>;
    methods: TMethods & ThisType<TData & { [key in keyof TComputed]: ReturnType<TComputed[key]> }>;
}

const SimpleVue = <
    TData extends {},
    TComputed extends {},
    TMethods extends {}
>(params: VueParams<TData, TComputed, TMethods>) => {
    return params
}

const instance = SimpleVue({
    data() {
      return {
        firstname: 'Type',
        lastname: 'Challenges',
        amount: 10,
      }
    },
    computed: {
      fullname() {
        return this.firstname + ' ' + this.lastname
      }
    },
    methods: {
      hi() {
        alert(this.fullname.toLowerCase())
      }
    }
  })