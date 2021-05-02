import { ProductTC } from '../../models/product'
import { GraphQLUpload } from 'graphql-upload';
import { schemaComposer } from 'graphql-compose'


export const createProduct = ProductTC.getResolver('createOne')
export const findProductById = ProductTC.getResolver('findById')
export const findManyProduct = ProductTC.getResolver('findMany')
export const updateProductById = ProductTC.getResolver('updateById')
export const removeProductById = ProductTC.getResolver('removeById')
export const countProduct = ProductTC.getResolver('count')
export const deleteProductOne = ProductTC.getResolver('removeOne')


export const upload = schemaComposer.createResolver({
      name : 'upload',
      type: "String",
      kind: 'mutation',
      args: {
        imgUrl: GraphQLUpload,
      },
      resolve: async ({ args, context }) => {
        const { imgUrl } = args
        const { uploadFile } = context
        const filename = await uploadFile(imgUrl)
        return filename
      },
  }); 