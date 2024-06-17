import { applyFilters, IApplyFiltersOutput, IDefaultFilters } from '../filter'

export async function filterBuilder<T>(
  params: T,
  defaultFilters?: IDefaultFilters<T>,
): Promise<IApplyFiltersOutput<T>> {
  const availableFilters = {}

  Object.keys(params).forEach((key) => {
    availableFilters[key] = async ({ filter }) => {
      return {
        where: {
          [key]: {
            equals: filter,
          },
        },
      }
    }
  })

  return await applyFilters<T>({
    appliedFiltersInput: params,
    availableFilters,
    defaultFilters,
  })
}
