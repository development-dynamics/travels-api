// src/shared/mappers/mapper.service.ts
import { plainToClass } from 'class-transformer'
import { typeMappings } from '../type-mappers'

export class MapperService {
  static mapPrismaToDomain<T, U>(prismaModel: T, domainModel: new () => U): U {
    const modelWithDefaults = Object.fromEntries(
      Object.entries(prismaModel).map(([key, value]) => {
        // Verificar y mapear tipos equivalentes
        if (value !== null && value !== undefined) {
          const targetType = typeMappings[(value as any).constructor.name]
          if (targetType) {
            switch (targetType) {
              case 'Decimal':
                value = parseFloat(value)
                break
              // Manejar otros tipos según sea necesario
            }
          }
        }
        return [key, value ?? null]
      }),
    )

    return plainToClass(domainModel, modelWithDefaults)
  }
}
