
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PatentCategory
 * 
 */
export type PatentCategory = $Result.DefaultSelection<Prisma.$PatentCategoryPayload>
/**
 * Model Patent
 * 
 */
export type Patent = $Result.DefaultSelection<Prisma.$PatentPayload>
/**
 * Model PatentDocument
 * 
 */
export type PatentDocument = $Result.DefaultSelection<Prisma.$PatentDocumentPayload>
/**
 * Model PatentFee
 * 
 */
export type PatentFee = $Result.DefaultSelection<Prisma.$PatentFeePayload>
/**
 * Model PatentEvent
 * 
 */
export type PatentEvent = $Result.DefaultSelection<Prisma.$PatentEventPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.patentCategory`: Exposes CRUD operations for the **PatentCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatentCategories
    * const patentCategories = await prisma.patentCategory.findMany()
    * ```
    */
  get patentCategory(): Prisma.PatentCategoryDelegate<ExtArgs>;

  /**
   * `prisma.patent`: Exposes CRUD operations for the **Patent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patents
    * const patents = await prisma.patent.findMany()
    * ```
    */
  get patent(): Prisma.PatentDelegate<ExtArgs>;

  /**
   * `prisma.patentDocument`: Exposes CRUD operations for the **PatentDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatentDocuments
    * const patentDocuments = await prisma.patentDocument.findMany()
    * ```
    */
  get patentDocument(): Prisma.PatentDocumentDelegate<ExtArgs>;

  /**
   * `prisma.patentFee`: Exposes CRUD operations for the **PatentFee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatentFees
    * const patentFees = await prisma.patentFee.findMany()
    * ```
    */
  get patentFee(): Prisma.PatentFeeDelegate<ExtArgs>;

  /**
   * `prisma.patentEvent`: Exposes CRUD operations for the **PatentEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatentEvents
    * const patentEvents = await prisma.patentEvent.findMany()
    * ```
    */
  get patentEvent(): Prisma.PatentEventDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PatentCategory: 'PatentCategory',
    Patent: 'Patent',
    PatentDocument: 'PatentDocument',
    PatentFee: 'PatentFee',
    PatentEvent: 'PatentEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "patentCategory" | "patent" | "patentDocument" | "patentFee" | "patentEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PatentCategory: {
        payload: Prisma.$PatentCategoryPayload<ExtArgs>
        fields: Prisma.PatentCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatentCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatentCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload>
          }
          findFirst: {
            args: Prisma.PatentCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatentCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload>
          }
          findMany: {
            args: Prisma.PatentCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload>[]
          }
          create: {
            args: Prisma.PatentCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload>
          }
          createMany: {
            args: Prisma.PatentCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatentCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload>[]
          }
          delete: {
            args: Prisma.PatentCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload>
          }
          update: {
            args: Prisma.PatentCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PatentCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatentCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatentCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentCategoryPayload>
          }
          aggregate: {
            args: Prisma.PatentCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatentCategory>
          }
          groupBy: {
            args: Prisma.PatentCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatentCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatentCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PatentCategoryCountAggregateOutputType> | number
          }
        }
      }
      Patent: {
        payload: Prisma.$PatentPayload<ExtArgs>
        fields: Prisma.PatentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload>
          }
          findFirst: {
            args: Prisma.PatentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload>
          }
          findMany: {
            args: Prisma.PatentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload>[]
          }
          create: {
            args: Prisma.PatentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload>
          }
          createMany: {
            args: Prisma.PatentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload>[]
          }
          delete: {
            args: Prisma.PatentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload>
          }
          update: {
            args: Prisma.PatentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload>
          }
          deleteMany: {
            args: Prisma.PatentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentPayload>
          }
          aggregate: {
            args: Prisma.PatentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatent>
          }
          groupBy: {
            args: Prisma.PatentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatentCountArgs<ExtArgs>
            result: $Utils.Optional<PatentCountAggregateOutputType> | number
          }
        }
      }
      PatentDocument: {
        payload: Prisma.$PatentDocumentPayload<ExtArgs>
        fields: Prisma.PatentDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatentDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatentDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload>
          }
          findFirst: {
            args: Prisma.PatentDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatentDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload>
          }
          findMany: {
            args: Prisma.PatentDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload>[]
          }
          create: {
            args: Prisma.PatentDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload>
          }
          createMany: {
            args: Prisma.PatentDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatentDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload>[]
          }
          delete: {
            args: Prisma.PatentDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload>
          }
          update: {
            args: Prisma.PatentDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload>
          }
          deleteMany: {
            args: Prisma.PatentDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatentDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatentDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentDocumentPayload>
          }
          aggregate: {
            args: Prisma.PatentDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatentDocument>
          }
          groupBy: {
            args: Prisma.PatentDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatentDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatentDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<PatentDocumentCountAggregateOutputType> | number
          }
        }
      }
      PatentFee: {
        payload: Prisma.$PatentFeePayload<ExtArgs>
        fields: Prisma.PatentFeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatentFeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatentFeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload>
          }
          findFirst: {
            args: Prisma.PatentFeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatentFeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload>
          }
          findMany: {
            args: Prisma.PatentFeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload>[]
          }
          create: {
            args: Prisma.PatentFeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload>
          }
          createMany: {
            args: Prisma.PatentFeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatentFeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload>[]
          }
          delete: {
            args: Prisma.PatentFeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload>
          }
          update: {
            args: Prisma.PatentFeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload>
          }
          deleteMany: {
            args: Prisma.PatentFeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatentFeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatentFeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentFeePayload>
          }
          aggregate: {
            args: Prisma.PatentFeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatentFee>
          }
          groupBy: {
            args: Prisma.PatentFeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatentFeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatentFeeCountArgs<ExtArgs>
            result: $Utils.Optional<PatentFeeCountAggregateOutputType> | number
          }
        }
      }
      PatentEvent: {
        payload: Prisma.$PatentEventPayload<ExtArgs>
        fields: Prisma.PatentEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatentEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatentEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload>
          }
          findFirst: {
            args: Prisma.PatentEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatentEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload>
          }
          findMany: {
            args: Prisma.PatentEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload>[]
          }
          create: {
            args: Prisma.PatentEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload>
          }
          createMany: {
            args: Prisma.PatentEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatentEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload>[]
          }
          delete: {
            args: Prisma.PatentEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload>
          }
          update: {
            args: Prisma.PatentEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload>
          }
          deleteMany: {
            args: Prisma.PatentEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatentEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatentEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatentEventPayload>
          }
          aggregate: {
            args: Prisma.PatentEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatentEvent>
          }
          groupBy: {
            args: Prisma.PatentEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatentEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatentEventCountArgs<ExtArgs>
            result: $Utils.Optional<PatentEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdPatents: number
    updatedPatents: number
    uploadedDocuments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdPatents?: boolean | UserCountOutputTypeCountCreatedPatentsArgs
    updatedPatents?: boolean | UserCountOutputTypeCountUpdatedPatentsArgs
    uploadedDocuments?: boolean | UserCountOutputTypeCountUploadedDocumentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedPatentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedPatentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentDocumentWhereInput
  }


  /**
   * Count Type PatentCategoryCountOutputType
   */

  export type PatentCategoryCountOutputType = {
    children: number
    patents: number
  }

  export type PatentCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | PatentCategoryCountOutputTypeCountChildrenArgs
    patents?: boolean | PatentCategoryCountOutputTypeCountPatentsArgs
  }

  // Custom InputTypes
  /**
   * PatentCategoryCountOutputType without action
   */
  export type PatentCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategoryCountOutputType
     */
    select?: PatentCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatentCategoryCountOutputType without action
   */
  export type PatentCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentCategoryWhereInput
  }

  /**
   * PatentCategoryCountOutputType without action
   */
  export type PatentCategoryCountOutputTypeCountPatentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentWhereInput
  }


  /**
   * Count Type PatentCountOutputType
   */

  export type PatentCountOutputType = {
    documents: number
    fees: number
    events: number
  }

  export type PatentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | PatentCountOutputTypeCountDocumentsArgs
    fees?: boolean | PatentCountOutputTypeCountFeesArgs
    events?: boolean | PatentCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * PatentCountOutputType without action
   */
  export type PatentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCountOutputType
     */
    select?: PatentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatentCountOutputType without action
   */
  export type PatentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentDocumentWhereInput
  }

  /**
   * PatentCountOutputType without action
   */
  export type PatentCountOutputTypeCountFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentFeeWhereInput
  }

  /**
   * PatentCountOutputType without action
   */
  export type PatentCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    realName: string | null
    phone: string | null
    department: string | null
    role: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    realName: string | null
    phone: string | null
    department: string | null
    role: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    realName: number
    phone: number
    department: number
    role: number
    avatar: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    realName?: true
    phone?: true
    department?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    realName?: true
    phone?: true
    department?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    realName?: true
    phone?: true
    department?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    realName: string
    phone: string | null
    department: string | null
    role: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    realName?: boolean
    phone?: boolean
    department?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    createdPatents?: boolean | User$createdPatentsArgs<ExtArgs>
    updatedPatents?: boolean | User$updatedPatentsArgs<ExtArgs>
    uploadedDocuments?: boolean | User$uploadedDocumentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    realName?: boolean
    phone?: boolean
    department?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    realName?: boolean
    phone?: boolean
    department?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdPatents?: boolean | User$createdPatentsArgs<ExtArgs>
    updatedPatents?: boolean | User$updatedPatentsArgs<ExtArgs>
    uploadedDocuments?: boolean | User$uploadedDocumentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdPatents: Prisma.$PatentPayload<ExtArgs>[]
      updatedPatents: Prisma.$PatentPayload<ExtArgs>[]
      uploadedDocuments: Prisma.$PatentDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      realName: string
      phone: string | null
      department: string | null
      role: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdPatents<T extends User$createdPatentsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdPatentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findMany"> | Null>
    updatedPatents<T extends User$updatedPatentsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedPatentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findMany"> | Null>
    uploadedDocuments<T extends User$uploadedDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly realName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.createdPatents
   */
  export type User$createdPatentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    where?: PatentWhereInput
    orderBy?: PatentOrderByWithRelationInput | PatentOrderByWithRelationInput[]
    cursor?: PatentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[]
  }

  /**
   * User.updatedPatents
   */
  export type User$updatedPatentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    where?: PatentWhereInput
    orderBy?: PatentOrderByWithRelationInput | PatentOrderByWithRelationInput[]
    cursor?: PatentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[]
  }

  /**
   * User.uploadedDocuments
   */
  export type User$uploadedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    where?: PatentDocumentWhereInput
    orderBy?: PatentDocumentOrderByWithRelationInput | PatentDocumentOrderByWithRelationInput[]
    cursor?: PatentDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatentDocumentScalarFieldEnum | PatentDocumentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PatentCategory
   */

  export type AggregatePatentCategory = {
    _count: PatentCategoryCountAggregateOutputType | null
    _avg: PatentCategoryAvgAggregateOutputType | null
    _sum: PatentCategorySumAggregateOutputType | null
    _min: PatentCategoryMinAggregateOutputType | null
    _max: PatentCategoryMaxAggregateOutputType | null
  }

  export type PatentCategoryAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type PatentCategorySumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type PatentCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatentCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatentCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatentCategoryAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type PatentCategorySumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type PatentCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatentCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatentCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatentCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatentCategory to aggregate.
     */
    where?: PatentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentCategories to fetch.
     */
    orderBy?: PatentCategoryOrderByWithRelationInput | PatentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatentCategories
    **/
    _count?: true | PatentCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatentCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatentCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatentCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatentCategoryMaxAggregateInputType
  }

  export type GetPatentCategoryAggregateType<T extends PatentCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePatentCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatentCategory[P]>
      : GetScalarType<T[P], AggregatePatentCategory[P]>
  }




  export type PatentCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentCategoryWhereInput
    orderBy?: PatentCategoryOrderByWithAggregationInput | PatentCategoryOrderByWithAggregationInput[]
    by: PatentCategoryScalarFieldEnum[] | PatentCategoryScalarFieldEnum
    having?: PatentCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatentCategoryCountAggregateInputType | true
    _avg?: PatentCategoryAvgAggregateInputType
    _sum?: PatentCategorySumAggregateInputType
    _min?: PatentCategoryMinAggregateInputType
    _max?: PatentCategoryMaxAggregateInputType
  }

  export type PatentCategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    parentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: PatentCategoryCountAggregateOutputType | null
    _avg: PatentCategoryAvgAggregateOutputType | null
    _sum: PatentCategorySumAggregateOutputType | null
    _min: PatentCategoryMinAggregateOutputType | null
    _max: PatentCategoryMaxAggregateOutputType | null
  }

  type GetPatentCategoryGroupByPayload<T extends PatentCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatentCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatentCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatentCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PatentCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PatentCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | PatentCategory$parentArgs<ExtArgs>
    children?: boolean | PatentCategory$childrenArgs<ExtArgs>
    patents?: boolean | PatentCategory$patentsArgs<ExtArgs>
    _count?: boolean | PatentCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patentCategory"]>

  export type PatentCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | PatentCategory$parentArgs<ExtArgs>
  }, ExtArgs["result"]["patentCategory"]>

  export type PatentCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatentCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PatentCategory$parentArgs<ExtArgs>
    children?: boolean | PatentCategory$childrenArgs<ExtArgs>
    patents?: boolean | PatentCategory$patentsArgs<ExtArgs>
    _count?: boolean | PatentCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatentCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PatentCategory$parentArgs<ExtArgs>
  }

  export type $PatentCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatentCategory"
    objects: {
      parent: Prisma.$PatentCategoryPayload<ExtArgs> | null
      children: Prisma.$PatentCategoryPayload<ExtArgs>[]
      patents: Prisma.$PatentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      parentId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patentCategory"]>
    composites: {}
  }

  type PatentCategoryGetPayload<S extends boolean | null | undefined | PatentCategoryDefaultArgs> = $Result.GetResult<Prisma.$PatentCategoryPayload, S>

  type PatentCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatentCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatentCategoryCountAggregateInputType | true
    }

  export interface PatentCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatentCategory'], meta: { name: 'PatentCategory' } }
    /**
     * Find zero or one PatentCategory that matches the filter.
     * @param {PatentCategoryFindUniqueArgs} args - Arguments to find a PatentCategory
     * @example
     * // Get one PatentCategory
     * const patentCategory = await prisma.patentCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatentCategoryFindUniqueArgs>(args: SelectSubset<T, PatentCategoryFindUniqueArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PatentCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatentCategoryFindUniqueOrThrowArgs} args - Arguments to find a PatentCategory
     * @example
     * // Get one PatentCategory
     * const patentCategory = await prisma.patentCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatentCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PatentCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PatentCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentCategoryFindFirstArgs} args - Arguments to find a PatentCategory
     * @example
     * // Get one PatentCategory
     * const patentCategory = await prisma.patentCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatentCategoryFindFirstArgs>(args?: SelectSubset<T, PatentCategoryFindFirstArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PatentCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentCategoryFindFirstOrThrowArgs} args - Arguments to find a PatentCategory
     * @example
     * // Get one PatentCategory
     * const patentCategory = await prisma.patentCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatentCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PatentCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PatentCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatentCategories
     * const patentCategories = await prisma.patentCategory.findMany()
     * 
     * // Get first 10 PatentCategories
     * const patentCategories = await prisma.patentCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patentCategoryWithIdOnly = await prisma.patentCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatentCategoryFindManyArgs>(args?: SelectSubset<T, PatentCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PatentCategory.
     * @param {PatentCategoryCreateArgs} args - Arguments to create a PatentCategory.
     * @example
     * // Create one PatentCategory
     * const PatentCategory = await prisma.patentCategory.create({
     *   data: {
     *     // ... data to create a PatentCategory
     *   }
     * })
     * 
     */
    create<T extends PatentCategoryCreateArgs>(args: SelectSubset<T, PatentCategoryCreateArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PatentCategories.
     * @param {PatentCategoryCreateManyArgs} args - Arguments to create many PatentCategories.
     * @example
     * // Create many PatentCategories
     * const patentCategory = await prisma.patentCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatentCategoryCreateManyArgs>(args?: SelectSubset<T, PatentCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatentCategories and returns the data saved in the database.
     * @param {PatentCategoryCreateManyAndReturnArgs} args - Arguments to create many PatentCategories.
     * @example
     * // Create many PatentCategories
     * const patentCategory = await prisma.patentCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatentCategories and only return the `id`
     * const patentCategoryWithIdOnly = await prisma.patentCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatentCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PatentCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PatentCategory.
     * @param {PatentCategoryDeleteArgs} args - Arguments to delete one PatentCategory.
     * @example
     * // Delete one PatentCategory
     * const PatentCategory = await prisma.patentCategory.delete({
     *   where: {
     *     // ... filter to delete one PatentCategory
     *   }
     * })
     * 
     */
    delete<T extends PatentCategoryDeleteArgs>(args: SelectSubset<T, PatentCategoryDeleteArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PatentCategory.
     * @param {PatentCategoryUpdateArgs} args - Arguments to update one PatentCategory.
     * @example
     * // Update one PatentCategory
     * const patentCategory = await prisma.patentCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatentCategoryUpdateArgs>(args: SelectSubset<T, PatentCategoryUpdateArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PatentCategories.
     * @param {PatentCategoryDeleteManyArgs} args - Arguments to filter PatentCategories to delete.
     * @example
     * // Delete a few PatentCategories
     * const { count } = await prisma.patentCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatentCategoryDeleteManyArgs>(args?: SelectSubset<T, PatentCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatentCategories
     * const patentCategory = await prisma.patentCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatentCategoryUpdateManyArgs>(args: SelectSubset<T, PatentCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatentCategory.
     * @param {PatentCategoryUpsertArgs} args - Arguments to update or create a PatentCategory.
     * @example
     * // Update or create a PatentCategory
     * const patentCategory = await prisma.patentCategory.upsert({
     *   create: {
     *     // ... data to create a PatentCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatentCategory we want to update
     *   }
     * })
     */
    upsert<T extends PatentCategoryUpsertArgs>(args: SelectSubset<T, PatentCategoryUpsertArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PatentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentCategoryCountArgs} args - Arguments to filter PatentCategories to count.
     * @example
     * // Count the number of PatentCategories
     * const count = await prisma.patentCategory.count({
     *   where: {
     *     // ... the filter for the PatentCategories we want to count
     *   }
     * })
    **/
    count<T extends PatentCategoryCountArgs>(
      args?: Subset<T, PatentCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatentCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatentCategoryAggregateArgs>(args: Subset<T, PatentCategoryAggregateArgs>): Prisma.PrismaPromise<GetPatentCategoryAggregateType<T>>

    /**
     * Group by PatentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatentCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatentCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PatentCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatentCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatentCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatentCategory model
   */
  readonly fields: PatentCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatentCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatentCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends PatentCategory$parentArgs<ExtArgs> = {}>(args?: Subset<T, PatentCategory$parentArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    children<T extends PatentCategory$childrenArgs<ExtArgs> = {}>(args?: Subset<T, PatentCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    patents<T extends PatentCategory$patentsArgs<ExtArgs> = {}>(args?: Subset<T, PatentCategory$patentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatentCategory model
   */ 
  interface PatentCategoryFieldRefs {
    readonly id: FieldRef<"PatentCategory", 'Int'>
    readonly name: FieldRef<"PatentCategory", 'String'>
    readonly description: FieldRef<"PatentCategory", 'String'>
    readonly parentId: FieldRef<"PatentCategory", 'Int'>
    readonly createdAt: FieldRef<"PatentCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"PatentCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatentCategory findUnique
   */
  export type PatentCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PatentCategory to fetch.
     */
    where: PatentCategoryWhereUniqueInput
  }

  /**
   * PatentCategory findUniqueOrThrow
   */
  export type PatentCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PatentCategory to fetch.
     */
    where: PatentCategoryWhereUniqueInput
  }

  /**
   * PatentCategory findFirst
   */
  export type PatentCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PatentCategory to fetch.
     */
    where?: PatentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentCategories to fetch.
     */
    orderBy?: PatentCategoryOrderByWithRelationInput | PatentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatentCategories.
     */
    cursor?: PatentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatentCategories.
     */
    distinct?: PatentCategoryScalarFieldEnum | PatentCategoryScalarFieldEnum[]
  }

  /**
   * PatentCategory findFirstOrThrow
   */
  export type PatentCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PatentCategory to fetch.
     */
    where?: PatentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentCategories to fetch.
     */
    orderBy?: PatentCategoryOrderByWithRelationInput | PatentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatentCategories.
     */
    cursor?: PatentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatentCategories.
     */
    distinct?: PatentCategoryScalarFieldEnum | PatentCategoryScalarFieldEnum[]
  }

  /**
   * PatentCategory findMany
   */
  export type PatentCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PatentCategories to fetch.
     */
    where?: PatentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentCategories to fetch.
     */
    orderBy?: PatentCategoryOrderByWithRelationInput | PatentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatentCategories.
     */
    cursor?: PatentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentCategories.
     */
    skip?: number
    distinct?: PatentCategoryScalarFieldEnum | PatentCategoryScalarFieldEnum[]
  }

  /**
   * PatentCategory create
   */
  export type PatentCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PatentCategory.
     */
    data: XOR<PatentCategoryCreateInput, PatentCategoryUncheckedCreateInput>
  }

  /**
   * PatentCategory createMany
   */
  export type PatentCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatentCategories.
     */
    data: PatentCategoryCreateManyInput | PatentCategoryCreateManyInput[]
  }

  /**
   * PatentCategory createManyAndReturn
   */
  export type PatentCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PatentCategories.
     */
    data: PatentCategoryCreateManyInput | PatentCategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatentCategory update
   */
  export type PatentCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PatentCategory.
     */
    data: XOR<PatentCategoryUpdateInput, PatentCategoryUncheckedUpdateInput>
    /**
     * Choose, which PatentCategory to update.
     */
    where: PatentCategoryWhereUniqueInput
  }

  /**
   * PatentCategory updateMany
   */
  export type PatentCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatentCategories.
     */
    data: XOR<PatentCategoryUpdateManyMutationInput, PatentCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PatentCategories to update
     */
    where?: PatentCategoryWhereInput
  }

  /**
   * PatentCategory upsert
   */
  export type PatentCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PatentCategory to update in case it exists.
     */
    where: PatentCategoryWhereUniqueInput
    /**
     * In case the PatentCategory found by the `where` argument doesn't exist, create a new PatentCategory with this data.
     */
    create: XOR<PatentCategoryCreateInput, PatentCategoryUncheckedCreateInput>
    /**
     * In case the PatentCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatentCategoryUpdateInput, PatentCategoryUncheckedUpdateInput>
  }

  /**
   * PatentCategory delete
   */
  export type PatentCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    /**
     * Filter which PatentCategory to delete.
     */
    where: PatentCategoryWhereUniqueInput
  }

  /**
   * PatentCategory deleteMany
   */
  export type PatentCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatentCategories to delete
     */
    where?: PatentCategoryWhereInput
  }

  /**
   * PatentCategory.parent
   */
  export type PatentCategory$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    where?: PatentCategoryWhereInput
  }

  /**
   * PatentCategory.children
   */
  export type PatentCategory$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
    where?: PatentCategoryWhereInput
    orderBy?: PatentCategoryOrderByWithRelationInput | PatentCategoryOrderByWithRelationInput[]
    cursor?: PatentCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatentCategoryScalarFieldEnum | PatentCategoryScalarFieldEnum[]
  }

  /**
   * PatentCategory.patents
   */
  export type PatentCategory$patentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    where?: PatentWhereInput
    orderBy?: PatentOrderByWithRelationInput | PatentOrderByWithRelationInput[]
    cursor?: PatentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[]
  }

  /**
   * PatentCategory without action
   */
  export type PatentCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentCategory
     */
    select?: PatentCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Patent
   */

  export type AggregatePatent = {
    _count: PatentCountAggregateOutputType | null
    _avg: PatentAvgAggregateOutputType | null
    _sum: PatentSumAggregateOutputType | null
    _min: PatentMinAggregateOutputType | null
    _max: PatentMaxAggregateOutputType | null
  }

  export type PatentAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type PatentSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type PatentMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    patentNumber: string | null
    applicationNumber: string | null
    applicationDate: Date | null
    publicationDate: Date | null
    grantDate: Date | null
    expirationDate: Date | null
    status: string | null
    type: string | null
    categoryId: number | null
    priorityDate: Date | null
    priorityCountry: string | null
    legalStatus: string | null
    abstract: string | null
    claims: string | null
    technicalField: string | null
    keywords: string | null
    applicants: string | null
    inventors: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type PatentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    patentNumber: string | null
    applicationNumber: string | null
    applicationDate: Date | null
    publicationDate: Date | null
    grantDate: Date | null
    expirationDate: Date | null
    status: string | null
    type: string | null
    categoryId: number | null
    priorityDate: Date | null
    priorityCountry: string | null
    legalStatus: string | null
    abstract: string | null
    claims: string | null
    technicalField: string | null
    keywords: string | null
    applicants: string | null
    inventors: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type PatentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    patentNumber: number
    applicationNumber: number
    applicationDate: number
    publicationDate: number
    grantDate: number
    expirationDate: number
    status: number
    type: number
    categoryId: number
    priorityDate: number
    priorityCountry: number
    legalStatus: number
    abstract: number
    claims: number
    technicalField: number
    keywords: number
    applicants: number
    inventors: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    _all: number
  }


  export type PatentAvgAggregateInputType = {
    id?: true
    categoryId?: true
    createdBy?: true
    updatedBy?: true
  }

  export type PatentSumAggregateInputType = {
    id?: true
    categoryId?: true
    createdBy?: true
    updatedBy?: true
  }

  export type PatentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    patentNumber?: true
    applicationNumber?: true
    applicationDate?: true
    publicationDate?: true
    grantDate?: true
    expirationDate?: true
    status?: true
    type?: true
    categoryId?: true
    priorityDate?: true
    priorityCountry?: true
    legalStatus?: true
    abstract?: true
    claims?: true
    technicalField?: true
    keywords?: true
    applicants?: true
    inventors?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type PatentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    patentNumber?: true
    applicationNumber?: true
    applicationDate?: true
    publicationDate?: true
    grantDate?: true
    expirationDate?: true
    status?: true
    type?: true
    categoryId?: true
    priorityDate?: true
    priorityCountry?: true
    legalStatus?: true
    abstract?: true
    claims?: true
    technicalField?: true
    keywords?: true
    applicants?: true
    inventors?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type PatentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    patentNumber?: true
    applicationNumber?: true
    applicationDate?: true
    publicationDate?: true
    grantDate?: true
    expirationDate?: true
    status?: true
    type?: true
    categoryId?: true
    priorityDate?: true
    priorityCountry?: true
    legalStatus?: true
    abstract?: true
    claims?: true
    technicalField?: true
    keywords?: true
    applicants?: true
    inventors?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    _all?: true
  }

  export type PatentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patent to aggregate.
     */
    where?: PatentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patents to fetch.
     */
    orderBy?: PatentOrderByWithRelationInput | PatentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patents
    **/
    _count?: true | PatentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatentMaxAggregateInputType
  }

  export type GetPatentAggregateType<T extends PatentAggregateArgs> = {
        [P in keyof T & keyof AggregatePatent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatent[P]>
      : GetScalarType<T[P], AggregatePatent[P]>
  }




  export type PatentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentWhereInput
    orderBy?: PatentOrderByWithAggregationInput | PatentOrderByWithAggregationInput[]
    by: PatentScalarFieldEnum[] | PatentScalarFieldEnum
    having?: PatentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatentCountAggregateInputType | true
    _avg?: PatentAvgAggregateInputType
    _sum?: PatentSumAggregateInputType
    _min?: PatentMinAggregateInputType
    _max?: PatentMaxAggregateInputType
  }

  export type PatentGroupByOutputType = {
    id: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date
    publicationDate: Date | null
    grantDate: Date | null
    expirationDate: Date | null
    status: string
    type: string
    categoryId: number
    priorityDate: Date | null
    priorityCountry: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt: Date
    updatedAt: Date
    createdBy: number
    updatedBy: number
    _count: PatentCountAggregateOutputType | null
    _avg: PatentAvgAggregateOutputType | null
    _sum: PatentSumAggregateOutputType | null
    _min: PatentMinAggregateOutputType | null
    _max: PatentMaxAggregateOutputType | null
  }

  type GetPatentGroupByPayload<T extends PatentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatentGroupByOutputType[P]>
            : GetScalarType<T[P], PatentGroupByOutputType[P]>
        }
      >
    >


  export type PatentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    patentNumber?: boolean
    applicationNumber?: boolean
    applicationDate?: boolean
    publicationDate?: boolean
    grantDate?: boolean
    expirationDate?: boolean
    status?: boolean
    type?: boolean
    categoryId?: boolean
    priorityDate?: boolean
    priorityCountry?: boolean
    legalStatus?: boolean
    abstract?: boolean
    claims?: boolean
    technicalField?: boolean
    keywords?: boolean
    applicants?: boolean
    inventors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    category?: boolean | PatentCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Patent$documentsArgs<ExtArgs>
    fees?: boolean | Patent$feesArgs<ExtArgs>
    events?: boolean | Patent$eventsArgs<ExtArgs>
    _count?: boolean | PatentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patent"]>

  export type PatentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    patentNumber?: boolean
    applicationNumber?: boolean
    applicationDate?: boolean
    publicationDate?: boolean
    grantDate?: boolean
    expirationDate?: boolean
    status?: boolean
    type?: boolean
    categoryId?: boolean
    priorityDate?: boolean
    priorityCountry?: boolean
    legalStatus?: boolean
    abstract?: boolean
    claims?: boolean
    technicalField?: boolean
    keywords?: boolean
    applicants?: boolean
    inventors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    category?: boolean | PatentCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patent"]>

  export type PatentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    patentNumber?: boolean
    applicationNumber?: boolean
    applicationDate?: boolean
    publicationDate?: boolean
    grantDate?: boolean
    expirationDate?: boolean
    status?: boolean
    type?: boolean
    categoryId?: boolean
    priorityDate?: boolean
    priorityCountry?: boolean
    legalStatus?: boolean
    abstract?: boolean
    claims?: boolean
    technicalField?: boolean
    keywords?: boolean
    applicants?: boolean
    inventors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }

  export type PatentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PatentCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Patent$documentsArgs<ExtArgs>
    fees?: boolean | Patent$feesArgs<ExtArgs>
    events?: boolean | Patent$eventsArgs<ExtArgs>
    _count?: boolean | PatentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PatentCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patent"
    objects: {
      category: Prisma.$PatentCategoryPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      updater: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$PatentDocumentPayload<ExtArgs>[]
      fees: Prisma.$PatentFeePayload<ExtArgs>[]
      events: Prisma.$PatentEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      patentNumber: string
      applicationNumber: string
      applicationDate: Date
      publicationDate: Date | null
      grantDate: Date | null
      expirationDate: Date | null
      status: string
      type: string
      categoryId: number
      priorityDate: Date | null
      priorityCountry: string | null
      legalStatus: string
      abstract: string
      claims: string
      technicalField: string
      keywords: string
      applicants: string
      inventors: string
      createdAt: Date
      updatedAt: Date
      createdBy: number
      updatedBy: number
    }, ExtArgs["result"]["patent"]>
    composites: {}
  }

  type PatentGetPayload<S extends boolean | null | undefined | PatentDefaultArgs> = $Result.GetResult<Prisma.$PatentPayload, S>

  type PatentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatentCountAggregateInputType | true
    }

  export interface PatentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patent'], meta: { name: 'Patent' } }
    /**
     * Find zero or one Patent that matches the filter.
     * @param {PatentFindUniqueArgs} args - Arguments to find a Patent
     * @example
     * // Get one Patent
     * const patent = await prisma.patent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatentFindUniqueArgs>(args: SelectSubset<T, PatentFindUniqueArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Patent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatentFindUniqueOrThrowArgs} args - Arguments to find a Patent
     * @example
     * // Get one Patent
     * const patent = await prisma.patent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatentFindUniqueOrThrowArgs>(args: SelectSubset<T, PatentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Patent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFindFirstArgs} args - Arguments to find a Patent
     * @example
     * // Get one Patent
     * const patent = await prisma.patent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatentFindFirstArgs>(args?: SelectSubset<T, PatentFindFirstArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Patent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFindFirstOrThrowArgs} args - Arguments to find a Patent
     * @example
     * // Get one Patent
     * const patent = await prisma.patent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatentFindFirstOrThrowArgs>(args?: SelectSubset<T, PatentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Patents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patents
     * const patents = await prisma.patent.findMany()
     * 
     * // Get first 10 Patents
     * const patents = await prisma.patent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patentWithIdOnly = await prisma.patent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatentFindManyArgs>(args?: SelectSubset<T, PatentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Patent.
     * @param {PatentCreateArgs} args - Arguments to create a Patent.
     * @example
     * // Create one Patent
     * const Patent = await prisma.patent.create({
     *   data: {
     *     // ... data to create a Patent
     *   }
     * })
     * 
     */
    create<T extends PatentCreateArgs>(args: SelectSubset<T, PatentCreateArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Patents.
     * @param {PatentCreateManyArgs} args - Arguments to create many Patents.
     * @example
     * // Create many Patents
     * const patent = await prisma.patent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatentCreateManyArgs>(args?: SelectSubset<T, PatentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patents and returns the data saved in the database.
     * @param {PatentCreateManyAndReturnArgs} args - Arguments to create many Patents.
     * @example
     * // Create many Patents
     * const patent = await prisma.patent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patents and only return the `id`
     * const patentWithIdOnly = await prisma.patent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatentCreateManyAndReturnArgs>(args?: SelectSubset<T, PatentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Patent.
     * @param {PatentDeleteArgs} args - Arguments to delete one Patent.
     * @example
     * // Delete one Patent
     * const Patent = await prisma.patent.delete({
     *   where: {
     *     // ... filter to delete one Patent
     *   }
     * })
     * 
     */
    delete<T extends PatentDeleteArgs>(args: SelectSubset<T, PatentDeleteArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Patent.
     * @param {PatentUpdateArgs} args - Arguments to update one Patent.
     * @example
     * // Update one Patent
     * const patent = await prisma.patent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatentUpdateArgs>(args: SelectSubset<T, PatentUpdateArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Patents.
     * @param {PatentDeleteManyArgs} args - Arguments to filter Patents to delete.
     * @example
     * // Delete a few Patents
     * const { count } = await prisma.patent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatentDeleteManyArgs>(args?: SelectSubset<T, PatentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patents
     * const patent = await prisma.patent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatentUpdateManyArgs>(args: SelectSubset<T, PatentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patent.
     * @param {PatentUpsertArgs} args - Arguments to update or create a Patent.
     * @example
     * // Update or create a Patent
     * const patent = await prisma.patent.upsert({
     *   create: {
     *     // ... data to create a Patent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patent we want to update
     *   }
     * })
     */
    upsert<T extends PatentUpsertArgs>(args: SelectSubset<T, PatentUpsertArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Patents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentCountArgs} args - Arguments to filter Patents to count.
     * @example
     * // Count the number of Patents
     * const count = await prisma.patent.count({
     *   where: {
     *     // ... the filter for the Patents we want to count
     *   }
     * })
    **/
    count<T extends PatentCountArgs>(
      args?: Subset<T, PatentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatentAggregateArgs>(args: Subset<T, PatentAggregateArgs>): Prisma.PrismaPromise<GetPatentAggregateType<T>>

    /**
     * Group by Patent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatentGroupByArgs['orderBy'] }
        : { orderBy?: PatentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patent model
   */
  readonly fields: PatentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends PatentCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatentCategoryDefaultArgs<ExtArgs>>): Prisma__PatentCategoryClient<$Result.GetResult<Prisma.$PatentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    updater<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    documents<T extends Patent$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Patent$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "findMany"> | Null>
    fees<T extends Patent$feesArgs<ExtArgs> = {}>(args?: Subset<T, Patent$feesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends Patent$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Patent$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patent model
   */ 
  interface PatentFieldRefs {
    readonly id: FieldRef<"Patent", 'Int'>
    readonly title: FieldRef<"Patent", 'String'>
    readonly description: FieldRef<"Patent", 'String'>
    readonly patentNumber: FieldRef<"Patent", 'String'>
    readonly applicationNumber: FieldRef<"Patent", 'String'>
    readonly applicationDate: FieldRef<"Patent", 'DateTime'>
    readonly publicationDate: FieldRef<"Patent", 'DateTime'>
    readonly grantDate: FieldRef<"Patent", 'DateTime'>
    readonly expirationDate: FieldRef<"Patent", 'DateTime'>
    readonly status: FieldRef<"Patent", 'String'>
    readonly type: FieldRef<"Patent", 'String'>
    readonly categoryId: FieldRef<"Patent", 'Int'>
    readonly priorityDate: FieldRef<"Patent", 'DateTime'>
    readonly priorityCountry: FieldRef<"Patent", 'String'>
    readonly legalStatus: FieldRef<"Patent", 'String'>
    readonly abstract: FieldRef<"Patent", 'String'>
    readonly claims: FieldRef<"Patent", 'String'>
    readonly technicalField: FieldRef<"Patent", 'String'>
    readonly keywords: FieldRef<"Patent", 'String'>
    readonly applicants: FieldRef<"Patent", 'String'>
    readonly inventors: FieldRef<"Patent", 'String'>
    readonly createdAt: FieldRef<"Patent", 'DateTime'>
    readonly updatedAt: FieldRef<"Patent", 'DateTime'>
    readonly createdBy: FieldRef<"Patent", 'Int'>
    readonly updatedBy: FieldRef<"Patent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Patent findUnique
   */
  export type PatentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * Filter, which Patent to fetch.
     */
    where: PatentWhereUniqueInput
  }

  /**
   * Patent findUniqueOrThrow
   */
  export type PatentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * Filter, which Patent to fetch.
     */
    where: PatentWhereUniqueInput
  }

  /**
   * Patent findFirst
   */
  export type PatentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * Filter, which Patent to fetch.
     */
    where?: PatentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patents to fetch.
     */
    orderBy?: PatentOrderByWithRelationInput | PatentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patents.
     */
    cursor?: PatentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patents.
     */
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[]
  }

  /**
   * Patent findFirstOrThrow
   */
  export type PatentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * Filter, which Patent to fetch.
     */
    where?: PatentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patents to fetch.
     */
    orderBy?: PatentOrderByWithRelationInput | PatentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patents.
     */
    cursor?: PatentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patents.
     */
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[]
  }

  /**
   * Patent findMany
   */
  export type PatentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * Filter, which Patents to fetch.
     */
    where?: PatentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patents to fetch.
     */
    orderBy?: PatentOrderByWithRelationInput | PatentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patents.
     */
    cursor?: PatentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patents.
     */
    skip?: number
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[]
  }

  /**
   * Patent create
   */
  export type PatentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * The data needed to create a Patent.
     */
    data: XOR<PatentCreateInput, PatentUncheckedCreateInput>
  }

  /**
   * Patent createMany
   */
  export type PatentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patents.
     */
    data: PatentCreateManyInput | PatentCreateManyInput[]
  }

  /**
   * Patent createManyAndReturn
   */
  export type PatentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Patents.
     */
    data: PatentCreateManyInput | PatentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patent update
   */
  export type PatentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * The data needed to update a Patent.
     */
    data: XOR<PatentUpdateInput, PatentUncheckedUpdateInput>
    /**
     * Choose, which Patent to update.
     */
    where: PatentWhereUniqueInput
  }

  /**
   * Patent updateMany
   */
  export type PatentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patents.
     */
    data: XOR<PatentUpdateManyMutationInput, PatentUncheckedUpdateManyInput>
    /**
     * Filter which Patents to update
     */
    where?: PatentWhereInput
  }

  /**
   * Patent upsert
   */
  export type PatentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * The filter to search for the Patent to update in case it exists.
     */
    where: PatentWhereUniqueInput
    /**
     * In case the Patent found by the `where` argument doesn't exist, create a new Patent with this data.
     */
    create: XOR<PatentCreateInput, PatentUncheckedCreateInput>
    /**
     * In case the Patent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatentUpdateInput, PatentUncheckedUpdateInput>
  }

  /**
   * Patent delete
   */
  export type PatentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
    /**
     * Filter which Patent to delete.
     */
    where: PatentWhereUniqueInput
  }

  /**
   * Patent deleteMany
   */
  export type PatentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patents to delete
     */
    where?: PatentWhereInput
  }

  /**
   * Patent.documents
   */
  export type Patent$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    where?: PatentDocumentWhereInput
    orderBy?: PatentDocumentOrderByWithRelationInput | PatentDocumentOrderByWithRelationInput[]
    cursor?: PatentDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatentDocumentScalarFieldEnum | PatentDocumentScalarFieldEnum[]
  }

  /**
   * Patent.fees
   */
  export type Patent$feesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    where?: PatentFeeWhereInput
    orderBy?: PatentFeeOrderByWithRelationInput | PatentFeeOrderByWithRelationInput[]
    cursor?: PatentFeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatentFeeScalarFieldEnum | PatentFeeScalarFieldEnum[]
  }

  /**
   * Patent.events
   */
  export type Patent$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    where?: PatentEventWhereInput
    orderBy?: PatentEventOrderByWithRelationInput | PatentEventOrderByWithRelationInput[]
    cursor?: PatentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatentEventScalarFieldEnum | PatentEventScalarFieldEnum[]
  }

  /**
   * Patent without action
   */
  export type PatentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patent
     */
    select?: PatentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentInclude<ExtArgs> | null
  }


  /**
   * Model PatentDocument
   */

  export type AggregatePatentDocument = {
    _count: PatentDocumentCountAggregateOutputType | null
    _avg: PatentDocumentAvgAggregateOutputType | null
    _sum: PatentDocumentSumAggregateOutputType | null
    _min: PatentDocumentMinAggregateOutputType | null
    _max: PatentDocumentMaxAggregateOutputType | null
  }

  export type PatentDocumentAvgAggregateOutputType = {
    id: number | null
    patentId: number | null
    fileSize: number | null
    uploadedBy: number | null
  }

  export type PatentDocumentSumAggregateOutputType = {
    id: number | null
    patentId: number | null
    fileSize: number | null
    uploadedBy: number | null
  }

  export type PatentDocumentMinAggregateOutputType = {
    id: number | null
    patentId: number | null
    name: string | null
    type: string | null
    fileUrl: string | null
    fileSize: number | null
    uploadedAt: Date | null
    uploadedBy: number | null
  }

  export type PatentDocumentMaxAggregateOutputType = {
    id: number | null
    patentId: number | null
    name: string | null
    type: string | null
    fileUrl: string | null
    fileSize: number | null
    uploadedAt: Date | null
    uploadedBy: number | null
  }

  export type PatentDocumentCountAggregateOutputType = {
    id: number
    patentId: number
    name: number
    type: number
    fileUrl: number
    fileSize: number
    uploadedAt: number
    uploadedBy: number
    _all: number
  }


  export type PatentDocumentAvgAggregateInputType = {
    id?: true
    patentId?: true
    fileSize?: true
    uploadedBy?: true
  }

  export type PatentDocumentSumAggregateInputType = {
    id?: true
    patentId?: true
    fileSize?: true
    uploadedBy?: true
  }

  export type PatentDocumentMinAggregateInputType = {
    id?: true
    patentId?: true
    name?: true
    type?: true
    fileUrl?: true
    fileSize?: true
    uploadedAt?: true
    uploadedBy?: true
  }

  export type PatentDocumentMaxAggregateInputType = {
    id?: true
    patentId?: true
    name?: true
    type?: true
    fileUrl?: true
    fileSize?: true
    uploadedAt?: true
    uploadedBy?: true
  }

  export type PatentDocumentCountAggregateInputType = {
    id?: true
    patentId?: true
    name?: true
    type?: true
    fileUrl?: true
    fileSize?: true
    uploadedAt?: true
    uploadedBy?: true
    _all?: true
  }

  export type PatentDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatentDocument to aggregate.
     */
    where?: PatentDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentDocuments to fetch.
     */
    orderBy?: PatentDocumentOrderByWithRelationInput | PatentDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatentDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatentDocuments
    **/
    _count?: true | PatentDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatentDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatentDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatentDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatentDocumentMaxAggregateInputType
  }

  export type GetPatentDocumentAggregateType<T extends PatentDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregatePatentDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatentDocument[P]>
      : GetScalarType<T[P], AggregatePatentDocument[P]>
  }




  export type PatentDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentDocumentWhereInput
    orderBy?: PatentDocumentOrderByWithAggregationInput | PatentDocumentOrderByWithAggregationInput[]
    by: PatentDocumentScalarFieldEnum[] | PatentDocumentScalarFieldEnum
    having?: PatentDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatentDocumentCountAggregateInputType | true
    _avg?: PatentDocumentAvgAggregateInputType
    _sum?: PatentDocumentSumAggregateInputType
    _min?: PatentDocumentMinAggregateInputType
    _max?: PatentDocumentMaxAggregateInputType
  }

  export type PatentDocumentGroupByOutputType = {
    id: number
    patentId: number
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt: Date
    uploadedBy: number
    _count: PatentDocumentCountAggregateOutputType | null
    _avg: PatentDocumentAvgAggregateOutputType | null
    _sum: PatentDocumentSumAggregateOutputType | null
    _min: PatentDocumentMinAggregateOutputType | null
    _max: PatentDocumentMaxAggregateOutputType | null
  }

  type GetPatentDocumentGroupByPayload<T extends PatentDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatentDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatentDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatentDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], PatentDocumentGroupByOutputType[P]>
        }
      >
    >


  export type PatentDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patentId?: boolean
    name?: boolean
    type?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    uploadedBy?: boolean
    patent?: boolean | PatentDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patentDocument"]>

  export type PatentDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patentId?: boolean
    name?: boolean
    type?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    uploadedBy?: boolean
    patent?: boolean | PatentDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patentDocument"]>

  export type PatentDocumentSelectScalar = {
    id?: boolean
    patentId?: boolean
    name?: boolean
    type?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    uploadedBy?: boolean
  }

  export type PatentDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patent?: boolean | PatentDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatentDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patent?: boolean | PatentDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatentDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatentDocument"
    objects: {
      patent: Prisma.$PatentPayload<ExtArgs>
      uploader: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patentId: number
      name: string
      type: string
      fileUrl: string
      fileSize: number
      uploadedAt: Date
      uploadedBy: number
    }, ExtArgs["result"]["patentDocument"]>
    composites: {}
  }

  type PatentDocumentGetPayload<S extends boolean | null | undefined | PatentDocumentDefaultArgs> = $Result.GetResult<Prisma.$PatentDocumentPayload, S>

  type PatentDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatentDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatentDocumentCountAggregateInputType | true
    }

  export interface PatentDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatentDocument'], meta: { name: 'PatentDocument' } }
    /**
     * Find zero or one PatentDocument that matches the filter.
     * @param {PatentDocumentFindUniqueArgs} args - Arguments to find a PatentDocument
     * @example
     * // Get one PatentDocument
     * const patentDocument = await prisma.patentDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatentDocumentFindUniqueArgs>(args: SelectSubset<T, PatentDocumentFindUniqueArgs<ExtArgs>>): Prisma__PatentDocumentClient<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PatentDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatentDocumentFindUniqueOrThrowArgs} args - Arguments to find a PatentDocument
     * @example
     * // Get one PatentDocument
     * const patentDocument = await prisma.patentDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatentDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, PatentDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatentDocumentClient<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PatentDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentDocumentFindFirstArgs} args - Arguments to find a PatentDocument
     * @example
     * // Get one PatentDocument
     * const patentDocument = await prisma.patentDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatentDocumentFindFirstArgs>(args?: SelectSubset<T, PatentDocumentFindFirstArgs<ExtArgs>>): Prisma__PatentDocumentClient<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PatentDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentDocumentFindFirstOrThrowArgs} args - Arguments to find a PatentDocument
     * @example
     * // Get one PatentDocument
     * const patentDocument = await prisma.patentDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatentDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, PatentDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatentDocumentClient<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PatentDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatentDocuments
     * const patentDocuments = await prisma.patentDocument.findMany()
     * 
     * // Get first 10 PatentDocuments
     * const patentDocuments = await prisma.patentDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patentDocumentWithIdOnly = await prisma.patentDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatentDocumentFindManyArgs>(args?: SelectSubset<T, PatentDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PatentDocument.
     * @param {PatentDocumentCreateArgs} args - Arguments to create a PatentDocument.
     * @example
     * // Create one PatentDocument
     * const PatentDocument = await prisma.patentDocument.create({
     *   data: {
     *     // ... data to create a PatentDocument
     *   }
     * })
     * 
     */
    create<T extends PatentDocumentCreateArgs>(args: SelectSubset<T, PatentDocumentCreateArgs<ExtArgs>>): Prisma__PatentDocumentClient<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PatentDocuments.
     * @param {PatentDocumentCreateManyArgs} args - Arguments to create many PatentDocuments.
     * @example
     * // Create many PatentDocuments
     * const patentDocument = await prisma.patentDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatentDocumentCreateManyArgs>(args?: SelectSubset<T, PatentDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatentDocuments and returns the data saved in the database.
     * @param {PatentDocumentCreateManyAndReturnArgs} args - Arguments to create many PatentDocuments.
     * @example
     * // Create many PatentDocuments
     * const patentDocument = await prisma.patentDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatentDocuments and only return the `id`
     * const patentDocumentWithIdOnly = await prisma.patentDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatentDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, PatentDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PatentDocument.
     * @param {PatentDocumentDeleteArgs} args - Arguments to delete one PatentDocument.
     * @example
     * // Delete one PatentDocument
     * const PatentDocument = await prisma.patentDocument.delete({
     *   where: {
     *     // ... filter to delete one PatentDocument
     *   }
     * })
     * 
     */
    delete<T extends PatentDocumentDeleteArgs>(args: SelectSubset<T, PatentDocumentDeleteArgs<ExtArgs>>): Prisma__PatentDocumentClient<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PatentDocument.
     * @param {PatentDocumentUpdateArgs} args - Arguments to update one PatentDocument.
     * @example
     * // Update one PatentDocument
     * const patentDocument = await prisma.patentDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatentDocumentUpdateArgs>(args: SelectSubset<T, PatentDocumentUpdateArgs<ExtArgs>>): Prisma__PatentDocumentClient<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PatentDocuments.
     * @param {PatentDocumentDeleteManyArgs} args - Arguments to filter PatentDocuments to delete.
     * @example
     * // Delete a few PatentDocuments
     * const { count } = await prisma.patentDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatentDocumentDeleteManyArgs>(args?: SelectSubset<T, PatentDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatentDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatentDocuments
     * const patentDocument = await prisma.patentDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatentDocumentUpdateManyArgs>(args: SelectSubset<T, PatentDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatentDocument.
     * @param {PatentDocumentUpsertArgs} args - Arguments to update or create a PatentDocument.
     * @example
     * // Update or create a PatentDocument
     * const patentDocument = await prisma.patentDocument.upsert({
     *   create: {
     *     // ... data to create a PatentDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatentDocument we want to update
     *   }
     * })
     */
    upsert<T extends PatentDocumentUpsertArgs>(args: SelectSubset<T, PatentDocumentUpsertArgs<ExtArgs>>): Prisma__PatentDocumentClient<$Result.GetResult<Prisma.$PatentDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PatentDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentDocumentCountArgs} args - Arguments to filter PatentDocuments to count.
     * @example
     * // Count the number of PatentDocuments
     * const count = await prisma.patentDocument.count({
     *   where: {
     *     // ... the filter for the PatentDocuments we want to count
     *   }
     * })
    **/
    count<T extends PatentDocumentCountArgs>(
      args?: Subset<T, PatentDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatentDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatentDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatentDocumentAggregateArgs>(args: Subset<T, PatentDocumentAggregateArgs>): Prisma.PrismaPromise<GetPatentDocumentAggregateType<T>>

    /**
     * Group by PatentDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatentDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatentDocumentGroupByArgs['orderBy'] }
        : { orderBy?: PatentDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatentDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatentDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatentDocument model
   */
  readonly fields: PatentDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatentDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatentDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patent<T extends PatentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatentDefaultArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatentDocument model
   */ 
  interface PatentDocumentFieldRefs {
    readonly id: FieldRef<"PatentDocument", 'Int'>
    readonly patentId: FieldRef<"PatentDocument", 'Int'>
    readonly name: FieldRef<"PatentDocument", 'String'>
    readonly type: FieldRef<"PatentDocument", 'String'>
    readonly fileUrl: FieldRef<"PatentDocument", 'String'>
    readonly fileSize: FieldRef<"PatentDocument", 'Int'>
    readonly uploadedAt: FieldRef<"PatentDocument", 'DateTime'>
    readonly uploadedBy: FieldRef<"PatentDocument", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PatentDocument findUnique
   */
  export type PatentDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PatentDocument to fetch.
     */
    where: PatentDocumentWhereUniqueInput
  }

  /**
   * PatentDocument findUniqueOrThrow
   */
  export type PatentDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PatentDocument to fetch.
     */
    where: PatentDocumentWhereUniqueInput
  }

  /**
   * PatentDocument findFirst
   */
  export type PatentDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PatentDocument to fetch.
     */
    where?: PatentDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentDocuments to fetch.
     */
    orderBy?: PatentDocumentOrderByWithRelationInput | PatentDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatentDocuments.
     */
    cursor?: PatentDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatentDocuments.
     */
    distinct?: PatentDocumentScalarFieldEnum | PatentDocumentScalarFieldEnum[]
  }

  /**
   * PatentDocument findFirstOrThrow
   */
  export type PatentDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PatentDocument to fetch.
     */
    where?: PatentDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentDocuments to fetch.
     */
    orderBy?: PatentDocumentOrderByWithRelationInput | PatentDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatentDocuments.
     */
    cursor?: PatentDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatentDocuments.
     */
    distinct?: PatentDocumentScalarFieldEnum | PatentDocumentScalarFieldEnum[]
  }

  /**
   * PatentDocument findMany
   */
  export type PatentDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PatentDocuments to fetch.
     */
    where?: PatentDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentDocuments to fetch.
     */
    orderBy?: PatentDocumentOrderByWithRelationInput | PatentDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatentDocuments.
     */
    cursor?: PatentDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentDocuments.
     */
    skip?: number
    distinct?: PatentDocumentScalarFieldEnum | PatentDocumentScalarFieldEnum[]
  }

  /**
   * PatentDocument create
   */
  export type PatentDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a PatentDocument.
     */
    data: XOR<PatentDocumentCreateInput, PatentDocumentUncheckedCreateInput>
  }

  /**
   * PatentDocument createMany
   */
  export type PatentDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatentDocuments.
     */
    data: PatentDocumentCreateManyInput | PatentDocumentCreateManyInput[]
  }

  /**
   * PatentDocument createManyAndReturn
   */
  export type PatentDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PatentDocuments.
     */
    data: PatentDocumentCreateManyInput | PatentDocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatentDocument update
   */
  export type PatentDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a PatentDocument.
     */
    data: XOR<PatentDocumentUpdateInput, PatentDocumentUncheckedUpdateInput>
    /**
     * Choose, which PatentDocument to update.
     */
    where: PatentDocumentWhereUniqueInput
  }

  /**
   * PatentDocument updateMany
   */
  export type PatentDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatentDocuments.
     */
    data: XOR<PatentDocumentUpdateManyMutationInput, PatentDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PatentDocuments to update
     */
    where?: PatentDocumentWhereInput
  }

  /**
   * PatentDocument upsert
   */
  export type PatentDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the PatentDocument to update in case it exists.
     */
    where: PatentDocumentWhereUniqueInput
    /**
     * In case the PatentDocument found by the `where` argument doesn't exist, create a new PatentDocument with this data.
     */
    create: XOR<PatentDocumentCreateInput, PatentDocumentUncheckedCreateInput>
    /**
     * In case the PatentDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatentDocumentUpdateInput, PatentDocumentUncheckedUpdateInput>
  }

  /**
   * PatentDocument delete
   */
  export type PatentDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
    /**
     * Filter which PatentDocument to delete.
     */
    where: PatentDocumentWhereUniqueInput
  }

  /**
   * PatentDocument deleteMany
   */
  export type PatentDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatentDocuments to delete
     */
    where?: PatentDocumentWhereInput
  }

  /**
   * PatentDocument without action
   */
  export type PatentDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentDocument
     */
    select?: PatentDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentDocumentInclude<ExtArgs> | null
  }


  /**
   * Model PatentFee
   */

  export type AggregatePatentFee = {
    _count: PatentFeeCountAggregateOutputType | null
    _avg: PatentFeeAvgAggregateOutputType | null
    _sum: PatentFeeSumAggregateOutputType | null
    _min: PatentFeeMinAggregateOutputType | null
    _max: PatentFeeMaxAggregateOutputType | null
  }

  export type PatentFeeAvgAggregateOutputType = {
    id: number | null
    patentId: number | null
    amount: number | null
  }

  export type PatentFeeSumAggregateOutputType = {
    id: number | null
    patentId: number | null
    amount: number | null
  }

  export type PatentFeeMinAggregateOutputType = {
    id: number | null
    patentId: number | null
    type: string | null
    amount: number | null
    currency: string | null
    dueDate: Date | null
    paidDate: Date | null
    status: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatentFeeMaxAggregateOutputType = {
    id: number | null
    patentId: number | null
    type: string | null
    amount: number | null
    currency: string | null
    dueDate: Date | null
    paidDate: Date | null
    status: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatentFeeCountAggregateOutputType = {
    id: number
    patentId: number
    type: number
    amount: number
    currency: number
    dueDate: number
    paidDate: number
    status: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatentFeeAvgAggregateInputType = {
    id?: true
    patentId?: true
    amount?: true
  }

  export type PatentFeeSumAggregateInputType = {
    id?: true
    patentId?: true
    amount?: true
  }

  export type PatentFeeMinAggregateInputType = {
    id?: true
    patentId?: true
    type?: true
    amount?: true
    currency?: true
    dueDate?: true
    paidDate?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatentFeeMaxAggregateInputType = {
    id?: true
    patentId?: true
    type?: true
    amount?: true
    currency?: true
    dueDate?: true
    paidDate?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatentFeeCountAggregateInputType = {
    id?: true
    patentId?: true
    type?: true
    amount?: true
    currency?: true
    dueDate?: true
    paidDate?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatentFeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatentFee to aggregate.
     */
    where?: PatentFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentFees to fetch.
     */
    orderBy?: PatentFeeOrderByWithRelationInput | PatentFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatentFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatentFees
    **/
    _count?: true | PatentFeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatentFeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatentFeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatentFeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatentFeeMaxAggregateInputType
  }

  export type GetPatentFeeAggregateType<T extends PatentFeeAggregateArgs> = {
        [P in keyof T & keyof AggregatePatentFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatentFee[P]>
      : GetScalarType<T[P], AggregatePatentFee[P]>
  }




  export type PatentFeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentFeeWhereInput
    orderBy?: PatentFeeOrderByWithAggregationInput | PatentFeeOrderByWithAggregationInput[]
    by: PatentFeeScalarFieldEnum[] | PatentFeeScalarFieldEnum
    having?: PatentFeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatentFeeCountAggregateInputType | true
    _avg?: PatentFeeAvgAggregateInputType
    _sum?: PatentFeeSumAggregateInputType
    _min?: PatentFeeMinAggregateInputType
    _max?: PatentFeeMaxAggregateInputType
  }

  export type PatentFeeGroupByOutputType = {
    id: number
    patentId: number
    type: string
    amount: number
    currency: string
    dueDate: Date
    paidDate: Date | null
    status: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatentFeeCountAggregateOutputType | null
    _avg: PatentFeeAvgAggregateOutputType | null
    _sum: PatentFeeSumAggregateOutputType | null
    _min: PatentFeeMinAggregateOutputType | null
    _max: PatentFeeMaxAggregateOutputType | null
  }

  type GetPatentFeeGroupByPayload<T extends PatentFeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatentFeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatentFeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatentFeeGroupByOutputType[P]>
            : GetScalarType<T[P], PatentFeeGroupByOutputType[P]>
        }
      >
    >


  export type PatentFeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patentId?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    dueDate?: boolean
    paidDate?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patent?: boolean | PatentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patentFee"]>

  export type PatentFeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patentId?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    dueDate?: boolean
    paidDate?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patent?: boolean | PatentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patentFee"]>

  export type PatentFeeSelectScalar = {
    id?: boolean
    patentId?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    dueDate?: boolean
    paidDate?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatentFeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patent?: boolean | PatentDefaultArgs<ExtArgs>
  }
  export type PatentFeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patent?: boolean | PatentDefaultArgs<ExtArgs>
  }

  export type $PatentFeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatentFee"
    objects: {
      patent: Prisma.$PatentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patentId: number
      type: string
      amount: number
      currency: string
      dueDate: Date
      paidDate: Date | null
      status: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patentFee"]>
    composites: {}
  }

  type PatentFeeGetPayload<S extends boolean | null | undefined | PatentFeeDefaultArgs> = $Result.GetResult<Prisma.$PatentFeePayload, S>

  type PatentFeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatentFeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatentFeeCountAggregateInputType | true
    }

  export interface PatentFeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatentFee'], meta: { name: 'PatentFee' } }
    /**
     * Find zero or one PatentFee that matches the filter.
     * @param {PatentFeeFindUniqueArgs} args - Arguments to find a PatentFee
     * @example
     * // Get one PatentFee
     * const patentFee = await prisma.patentFee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatentFeeFindUniqueArgs>(args: SelectSubset<T, PatentFeeFindUniqueArgs<ExtArgs>>): Prisma__PatentFeeClient<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PatentFee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatentFeeFindUniqueOrThrowArgs} args - Arguments to find a PatentFee
     * @example
     * // Get one PatentFee
     * const patentFee = await prisma.patentFee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatentFeeFindUniqueOrThrowArgs>(args: SelectSubset<T, PatentFeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatentFeeClient<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PatentFee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFeeFindFirstArgs} args - Arguments to find a PatentFee
     * @example
     * // Get one PatentFee
     * const patentFee = await prisma.patentFee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatentFeeFindFirstArgs>(args?: SelectSubset<T, PatentFeeFindFirstArgs<ExtArgs>>): Prisma__PatentFeeClient<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PatentFee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFeeFindFirstOrThrowArgs} args - Arguments to find a PatentFee
     * @example
     * // Get one PatentFee
     * const patentFee = await prisma.patentFee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatentFeeFindFirstOrThrowArgs>(args?: SelectSubset<T, PatentFeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatentFeeClient<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PatentFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatentFees
     * const patentFees = await prisma.patentFee.findMany()
     * 
     * // Get first 10 PatentFees
     * const patentFees = await prisma.patentFee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patentFeeWithIdOnly = await prisma.patentFee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatentFeeFindManyArgs>(args?: SelectSubset<T, PatentFeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PatentFee.
     * @param {PatentFeeCreateArgs} args - Arguments to create a PatentFee.
     * @example
     * // Create one PatentFee
     * const PatentFee = await prisma.patentFee.create({
     *   data: {
     *     // ... data to create a PatentFee
     *   }
     * })
     * 
     */
    create<T extends PatentFeeCreateArgs>(args: SelectSubset<T, PatentFeeCreateArgs<ExtArgs>>): Prisma__PatentFeeClient<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PatentFees.
     * @param {PatentFeeCreateManyArgs} args - Arguments to create many PatentFees.
     * @example
     * // Create many PatentFees
     * const patentFee = await prisma.patentFee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatentFeeCreateManyArgs>(args?: SelectSubset<T, PatentFeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatentFees and returns the data saved in the database.
     * @param {PatentFeeCreateManyAndReturnArgs} args - Arguments to create many PatentFees.
     * @example
     * // Create many PatentFees
     * const patentFee = await prisma.patentFee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatentFees and only return the `id`
     * const patentFeeWithIdOnly = await prisma.patentFee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatentFeeCreateManyAndReturnArgs>(args?: SelectSubset<T, PatentFeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PatentFee.
     * @param {PatentFeeDeleteArgs} args - Arguments to delete one PatentFee.
     * @example
     * // Delete one PatentFee
     * const PatentFee = await prisma.patentFee.delete({
     *   where: {
     *     // ... filter to delete one PatentFee
     *   }
     * })
     * 
     */
    delete<T extends PatentFeeDeleteArgs>(args: SelectSubset<T, PatentFeeDeleteArgs<ExtArgs>>): Prisma__PatentFeeClient<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PatentFee.
     * @param {PatentFeeUpdateArgs} args - Arguments to update one PatentFee.
     * @example
     * // Update one PatentFee
     * const patentFee = await prisma.patentFee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatentFeeUpdateArgs>(args: SelectSubset<T, PatentFeeUpdateArgs<ExtArgs>>): Prisma__PatentFeeClient<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PatentFees.
     * @param {PatentFeeDeleteManyArgs} args - Arguments to filter PatentFees to delete.
     * @example
     * // Delete a few PatentFees
     * const { count } = await prisma.patentFee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatentFeeDeleteManyArgs>(args?: SelectSubset<T, PatentFeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatentFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatentFees
     * const patentFee = await prisma.patentFee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatentFeeUpdateManyArgs>(args: SelectSubset<T, PatentFeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatentFee.
     * @param {PatentFeeUpsertArgs} args - Arguments to update or create a PatentFee.
     * @example
     * // Update or create a PatentFee
     * const patentFee = await prisma.patentFee.upsert({
     *   create: {
     *     // ... data to create a PatentFee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatentFee we want to update
     *   }
     * })
     */
    upsert<T extends PatentFeeUpsertArgs>(args: SelectSubset<T, PatentFeeUpsertArgs<ExtArgs>>): Prisma__PatentFeeClient<$Result.GetResult<Prisma.$PatentFeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PatentFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFeeCountArgs} args - Arguments to filter PatentFees to count.
     * @example
     * // Count the number of PatentFees
     * const count = await prisma.patentFee.count({
     *   where: {
     *     // ... the filter for the PatentFees we want to count
     *   }
     * })
    **/
    count<T extends PatentFeeCountArgs>(
      args?: Subset<T, PatentFeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatentFeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatentFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatentFeeAggregateArgs>(args: Subset<T, PatentFeeAggregateArgs>): Prisma.PrismaPromise<GetPatentFeeAggregateType<T>>

    /**
     * Group by PatentFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentFeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatentFeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatentFeeGroupByArgs['orderBy'] }
        : { orderBy?: PatentFeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatentFeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatentFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatentFee model
   */
  readonly fields: PatentFeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatentFee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatentFeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patent<T extends PatentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatentDefaultArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatentFee model
   */ 
  interface PatentFeeFieldRefs {
    readonly id: FieldRef<"PatentFee", 'Int'>
    readonly patentId: FieldRef<"PatentFee", 'Int'>
    readonly type: FieldRef<"PatentFee", 'String'>
    readonly amount: FieldRef<"PatentFee", 'Float'>
    readonly currency: FieldRef<"PatentFee", 'String'>
    readonly dueDate: FieldRef<"PatentFee", 'DateTime'>
    readonly paidDate: FieldRef<"PatentFee", 'DateTime'>
    readonly status: FieldRef<"PatentFee", 'String'>
    readonly description: FieldRef<"PatentFee", 'String'>
    readonly createdAt: FieldRef<"PatentFee", 'DateTime'>
    readonly updatedAt: FieldRef<"PatentFee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatentFee findUnique
   */
  export type PatentFeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * Filter, which PatentFee to fetch.
     */
    where: PatentFeeWhereUniqueInput
  }

  /**
   * PatentFee findUniqueOrThrow
   */
  export type PatentFeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * Filter, which PatentFee to fetch.
     */
    where: PatentFeeWhereUniqueInput
  }

  /**
   * PatentFee findFirst
   */
  export type PatentFeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * Filter, which PatentFee to fetch.
     */
    where?: PatentFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentFees to fetch.
     */
    orderBy?: PatentFeeOrderByWithRelationInput | PatentFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatentFees.
     */
    cursor?: PatentFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatentFees.
     */
    distinct?: PatentFeeScalarFieldEnum | PatentFeeScalarFieldEnum[]
  }

  /**
   * PatentFee findFirstOrThrow
   */
  export type PatentFeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * Filter, which PatentFee to fetch.
     */
    where?: PatentFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentFees to fetch.
     */
    orderBy?: PatentFeeOrderByWithRelationInput | PatentFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatentFees.
     */
    cursor?: PatentFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatentFees.
     */
    distinct?: PatentFeeScalarFieldEnum | PatentFeeScalarFieldEnum[]
  }

  /**
   * PatentFee findMany
   */
  export type PatentFeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * Filter, which PatentFees to fetch.
     */
    where?: PatentFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentFees to fetch.
     */
    orderBy?: PatentFeeOrderByWithRelationInput | PatentFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatentFees.
     */
    cursor?: PatentFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentFees.
     */
    skip?: number
    distinct?: PatentFeeScalarFieldEnum | PatentFeeScalarFieldEnum[]
  }

  /**
   * PatentFee create
   */
  export type PatentFeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * The data needed to create a PatentFee.
     */
    data: XOR<PatentFeeCreateInput, PatentFeeUncheckedCreateInput>
  }

  /**
   * PatentFee createMany
   */
  export type PatentFeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatentFees.
     */
    data: PatentFeeCreateManyInput | PatentFeeCreateManyInput[]
  }

  /**
   * PatentFee createManyAndReturn
   */
  export type PatentFeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PatentFees.
     */
    data: PatentFeeCreateManyInput | PatentFeeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatentFee update
   */
  export type PatentFeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * The data needed to update a PatentFee.
     */
    data: XOR<PatentFeeUpdateInput, PatentFeeUncheckedUpdateInput>
    /**
     * Choose, which PatentFee to update.
     */
    where: PatentFeeWhereUniqueInput
  }

  /**
   * PatentFee updateMany
   */
  export type PatentFeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatentFees.
     */
    data: XOR<PatentFeeUpdateManyMutationInput, PatentFeeUncheckedUpdateManyInput>
    /**
     * Filter which PatentFees to update
     */
    where?: PatentFeeWhereInput
  }

  /**
   * PatentFee upsert
   */
  export type PatentFeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * The filter to search for the PatentFee to update in case it exists.
     */
    where: PatentFeeWhereUniqueInput
    /**
     * In case the PatentFee found by the `where` argument doesn't exist, create a new PatentFee with this data.
     */
    create: XOR<PatentFeeCreateInput, PatentFeeUncheckedCreateInput>
    /**
     * In case the PatentFee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatentFeeUpdateInput, PatentFeeUncheckedUpdateInput>
  }

  /**
   * PatentFee delete
   */
  export type PatentFeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
    /**
     * Filter which PatentFee to delete.
     */
    where: PatentFeeWhereUniqueInput
  }

  /**
   * PatentFee deleteMany
   */
  export type PatentFeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatentFees to delete
     */
    where?: PatentFeeWhereInput
  }

  /**
   * PatentFee without action
   */
  export type PatentFeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentFee
     */
    select?: PatentFeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentFeeInclude<ExtArgs> | null
  }


  /**
   * Model PatentEvent
   */

  export type AggregatePatentEvent = {
    _count: PatentEventCountAggregateOutputType | null
    _avg: PatentEventAvgAggregateOutputType | null
    _sum: PatentEventSumAggregateOutputType | null
    _min: PatentEventMinAggregateOutputType | null
    _max: PatentEventMaxAggregateOutputType | null
  }

  export type PatentEventAvgAggregateOutputType = {
    id: number | null
    patentId: number | null
  }

  export type PatentEventSumAggregateOutputType = {
    id: number | null
    patentId: number | null
  }

  export type PatentEventMinAggregateOutputType = {
    id: number | null
    patentId: number | null
    type: string | null
    title: string | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatentEventMaxAggregateOutputType = {
    id: number | null
    patentId: number | null
    type: string | null
    title: string | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatentEventCountAggregateOutputType = {
    id: number
    patentId: number
    type: number
    title: number
    description: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatentEventAvgAggregateInputType = {
    id?: true
    patentId?: true
  }

  export type PatentEventSumAggregateInputType = {
    id?: true
    patentId?: true
  }

  export type PatentEventMinAggregateInputType = {
    id?: true
    patentId?: true
    type?: true
    title?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatentEventMaxAggregateInputType = {
    id?: true
    patentId?: true
    type?: true
    title?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatentEventCountAggregateInputType = {
    id?: true
    patentId?: true
    type?: true
    title?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatentEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatentEvent to aggregate.
     */
    where?: PatentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentEvents to fetch.
     */
    orderBy?: PatentEventOrderByWithRelationInput | PatentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatentEvents
    **/
    _count?: true | PatentEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatentEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatentEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatentEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatentEventMaxAggregateInputType
  }

  export type GetPatentEventAggregateType<T extends PatentEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePatentEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatentEvent[P]>
      : GetScalarType<T[P], AggregatePatentEvent[P]>
  }




  export type PatentEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatentEventWhereInput
    orderBy?: PatentEventOrderByWithAggregationInput | PatentEventOrderByWithAggregationInput[]
    by: PatentEventScalarFieldEnum[] | PatentEventScalarFieldEnum
    having?: PatentEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatentEventCountAggregateInputType | true
    _avg?: PatentEventAvgAggregateInputType
    _sum?: PatentEventSumAggregateInputType
    _min?: PatentEventMinAggregateInputType
    _max?: PatentEventMaxAggregateInputType
  }

  export type PatentEventGroupByOutputType = {
    id: number
    patentId: number
    type: string
    title: string
    description: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: PatentEventCountAggregateOutputType | null
    _avg: PatentEventAvgAggregateOutputType | null
    _sum: PatentEventSumAggregateOutputType | null
    _min: PatentEventMinAggregateOutputType | null
    _max: PatentEventMaxAggregateOutputType | null
  }

  type GetPatentEventGroupByPayload<T extends PatentEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatentEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatentEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatentEventGroupByOutputType[P]>
            : GetScalarType<T[P], PatentEventGroupByOutputType[P]>
        }
      >
    >


  export type PatentEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patentId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patent?: boolean | PatentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patentEvent"]>

  export type PatentEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patentId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patent?: boolean | PatentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patentEvent"]>

  export type PatentEventSelectScalar = {
    id?: boolean
    patentId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatentEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patent?: boolean | PatentDefaultArgs<ExtArgs>
  }
  export type PatentEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patent?: boolean | PatentDefaultArgs<ExtArgs>
  }

  export type $PatentEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatentEvent"
    objects: {
      patent: Prisma.$PatentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patentId: number
      type: string
      title: string
      description: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patentEvent"]>
    composites: {}
  }

  type PatentEventGetPayload<S extends boolean | null | undefined | PatentEventDefaultArgs> = $Result.GetResult<Prisma.$PatentEventPayload, S>

  type PatentEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatentEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatentEventCountAggregateInputType | true
    }

  export interface PatentEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatentEvent'], meta: { name: 'PatentEvent' } }
    /**
     * Find zero or one PatentEvent that matches the filter.
     * @param {PatentEventFindUniqueArgs} args - Arguments to find a PatentEvent
     * @example
     * // Get one PatentEvent
     * const patentEvent = await prisma.patentEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatentEventFindUniqueArgs>(args: SelectSubset<T, PatentEventFindUniqueArgs<ExtArgs>>): Prisma__PatentEventClient<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PatentEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatentEventFindUniqueOrThrowArgs} args - Arguments to find a PatentEvent
     * @example
     * // Get one PatentEvent
     * const patentEvent = await prisma.patentEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatentEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PatentEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatentEventClient<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PatentEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentEventFindFirstArgs} args - Arguments to find a PatentEvent
     * @example
     * // Get one PatentEvent
     * const patentEvent = await prisma.patentEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatentEventFindFirstArgs>(args?: SelectSubset<T, PatentEventFindFirstArgs<ExtArgs>>): Prisma__PatentEventClient<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PatentEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentEventFindFirstOrThrowArgs} args - Arguments to find a PatentEvent
     * @example
     * // Get one PatentEvent
     * const patentEvent = await prisma.patentEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatentEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PatentEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatentEventClient<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PatentEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatentEvents
     * const patentEvents = await prisma.patentEvent.findMany()
     * 
     * // Get first 10 PatentEvents
     * const patentEvents = await prisma.patentEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patentEventWithIdOnly = await prisma.patentEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatentEventFindManyArgs>(args?: SelectSubset<T, PatentEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PatentEvent.
     * @param {PatentEventCreateArgs} args - Arguments to create a PatentEvent.
     * @example
     * // Create one PatentEvent
     * const PatentEvent = await prisma.patentEvent.create({
     *   data: {
     *     // ... data to create a PatentEvent
     *   }
     * })
     * 
     */
    create<T extends PatentEventCreateArgs>(args: SelectSubset<T, PatentEventCreateArgs<ExtArgs>>): Prisma__PatentEventClient<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PatentEvents.
     * @param {PatentEventCreateManyArgs} args - Arguments to create many PatentEvents.
     * @example
     * // Create many PatentEvents
     * const patentEvent = await prisma.patentEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatentEventCreateManyArgs>(args?: SelectSubset<T, PatentEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatentEvents and returns the data saved in the database.
     * @param {PatentEventCreateManyAndReturnArgs} args - Arguments to create many PatentEvents.
     * @example
     * // Create many PatentEvents
     * const patentEvent = await prisma.patentEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatentEvents and only return the `id`
     * const patentEventWithIdOnly = await prisma.patentEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatentEventCreateManyAndReturnArgs>(args?: SelectSubset<T, PatentEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PatentEvent.
     * @param {PatentEventDeleteArgs} args - Arguments to delete one PatentEvent.
     * @example
     * // Delete one PatentEvent
     * const PatentEvent = await prisma.patentEvent.delete({
     *   where: {
     *     // ... filter to delete one PatentEvent
     *   }
     * })
     * 
     */
    delete<T extends PatentEventDeleteArgs>(args: SelectSubset<T, PatentEventDeleteArgs<ExtArgs>>): Prisma__PatentEventClient<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PatentEvent.
     * @param {PatentEventUpdateArgs} args - Arguments to update one PatentEvent.
     * @example
     * // Update one PatentEvent
     * const patentEvent = await prisma.patentEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatentEventUpdateArgs>(args: SelectSubset<T, PatentEventUpdateArgs<ExtArgs>>): Prisma__PatentEventClient<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PatentEvents.
     * @param {PatentEventDeleteManyArgs} args - Arguments to filter PatentEvents to delete.
     * @example
     * // Delete a few PatentEvents
     * const { count } = await prisma.patentEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatentEventDeleteManyArgs>(args?: SelectSubset<T, PatentEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatentEvents
     * const patentEvent = await prisma.patentEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatentEventUpdateManyArgs>(args: SelectSubset<T, PatentEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatentEvent.
     * @param {PatentEventUpsertArgs} args - Arguments to update or create a PatentEvent.
     * @example
     * // Update or create a PatentEvent
     * const patentEvent = await prisma.patentEvent.upsert({
     *   create: {
     *     // ... data to create a PatentEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatentEvent we want to update
     *   }
     * })
     */
    upsert<T extends PatentEventUpsertArgs>(args: SelectSubset<T, PatentEventUpsertArgs<ExtArgs>>): Prisma__PatentEventClient<$Result.GetResult<Prisma.$PatentEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PatentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentEventCountArgs} args - Arguments to filter PatentEvents to count.
     * @example
     * // Count the number of PatentEvents
     * const count = await prisma.patentEvent.count({
     *   where: {
     *     // ... the filter for the PatentEvents we want to count
     *   }
     * })
    **/
    count<T extends PatentEventCountArgs>(
      args?: Subset<T, PatentEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatentEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatentEventAggregateArgs>(args: Subset<T, PatentEventAggregateArgs>): Prisma.PrismaPromise<GetPatentEventAggregateType<T>>

    /**
     * Group by PatentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatentEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatentEventGroupByArgs['orderBy'] }
        : { orderBy?: PatentEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatentEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatentEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatentEvent model
   */
  readonly fields: PatentEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatentEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatentEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patent<T extends PatentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatentDefaultArgs<ExtArgs>>): Prisma__PatentClient<$Result.GetResult<Prisma.$PatentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatentEvent model
   */ 
  interface PatentEventFieldRefs {
    readonly id: FieldRef<"PatentEvent", 'Int'>
    readonly patentId: FieldRef<"PatentEvent", 'Int'>
    readonly type: FieldRef<"PatentEvent", 'String'>
    readonly title: FieldRef<"PatentEvent", 'String'>
    readonly description: FieldRef<"PatentEvent", 'String'>
    readonly date: FieldRef<"PatentEvent", 'DateTime'>
    readonly createdAt: FieldRef<"PatentEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"PatentEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatentEvent findUnique
   */
  export type PatentEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * Filter, which PatentEvent to fetch.
     */
    where: PatentEventWhereUniqueInput
  }

  /**
   * PatentEvent findUniqueOrThrow
   */
  export type PatentEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * Filter, which PatentEvent to fetch.
     */
    where: PatentEventWhereUniqueInput
  }

  /**
   * PatentEvent findFirst
   */
  export type PatentEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * Filter, which PatentEvent to fetch.
     */
    where?: PatentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentEvents to fetch.
     */
    orderBy?: PatentEventOrderByWithRelationInput | PatentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatentEvents.
     */
    cursor?: PatentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatentEvents.
     */
    distinct?: PatentEventScalarFieldEnum | PatentEventScalarFieldEnum[]
  }

  /**
   * PatentEvent findFirstOrThrow
   */
  export type PatentEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * Filter, which PatentEvent to fetch.
     */
    where?: PatentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentEvents to fetch.
     */
    orderBy?: PatentEventOrderByWithRelationInput | PatentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatentEvents.
     */
    cursor?: PatentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatentEvents.
     */
    distinct?: PatentEventScalarFieldEnum | PatentEventScalarFieldEnum[]
  }

  /**
   * PatentEvent findMany
   */
  export type PatentEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * Filter, which PatentEvents to fetch.
     */
    where?: PatentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatentEvents to fetch.
     */
    orderBy?: PatentEventOrderByWithRelationInput | PatentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatentEvents.
     */
    cursor?: PatentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatentEvents.
     */
    skip?: number
    distinct?: PatentEventScalarFieldEnum | PatentEventScalarFieldEnum[]
  }

  /**
   * PatentEvent create
   */
  export type PatentEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * The data needed to create a PatentEvent.
     */
    data: XOR<PatentEventCreateInput, PatentEventUncheckedCreateInput>
  }

  /**
   * PatentEvent createMany
   */
  export type PatentEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatentEvents.
     */
    data: PatentEventCreateManyInput | PatentEventCreateManyInput[]
  }

  /**
   * PatentEvent createManyAndReturn
   */
  export type PatentEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PatentEvents.
     */
    data: PatentEventCreateManyInput | PatentEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatentEvent update
   */
  export type PatentEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * The data needed to update a PatentEvent.
     */
    data: XOR<PatentEventUpdateInput, PatentEventUncheckedUpdateInput>
    /**
     * Choose, which PatentEvent to update.
     */
    where: PatentEventWhereUniqueInput
  }

  /**
   * PatentEvent updateMany
   */
  export type PatentEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatentEvents.
     */
    data: XOR<PatentEventUpdateManyMutationInput, PatentEventUncheckedUpdateManyInput>
    /**
     * Filter which PatentEvents to update
     */
    where?: PatentEventWhereInput
  }

  /**
   * PatentEvent upsert
   */
  export type PatentEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * The filter to search for the PatentEvent to update in case it exists.
     */
    where: PatentEventWhereUniqueInput
    /**
     * In case the PatentEvent found by the `where` argument doesn't exist, create a new PatentEvent with this data.
     */
    create: XOR<PatentEventCreateInput, PatentEventUncheckedCreateInput>
    /**
     * In case the PatentEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatentEventUpdateInput, PatentEventUncheckedUpdateInput>
  }

  /**
   * PatentEvent delete
   */
  export type PatentEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
    /**
     * Filter which PatentEvent to delete.
     */
    where: PatentEventWhereUniqueInput
  }

  /**
   * PatentEvent deleteMany
   */
  export type PatentEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatentEvents to delete
     */
    where?: PatentEventWhereInput
  }

  /**
   * PatentEvent without action
   */
  export type PatentEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatentEvent
     */
    select?: PatentEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatentEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    realName: 'realName',
    phone: 'phone',
    department: 'department',
    role: 'role',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatentCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatentCategoryScalarFieldEnum = (typeof PatentCategoryScalarFieldEnum)[keyof typeof PatentCategoryScalarFieldEnum]


  export const PatentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    patentNumber: 'patentNumber',
    applicationNumber: 'applicationNumber',
    applicationDate: 'applicationDate',
    publicationDate: 'publicationDate',
    grantDate: 'grantDate',
    expirationDate: 'expirationDate',
    status: 'status',
    type: 'type',
    categoryId: 'categoryId',
    priorityDate: 'priorityDate',
    priorityCountry: 'priorityCountry',
    legalStatus: 'legalStatus',
    abstract: 'abstract',
    claims: 'claims',
    technicalField: 'technicalField',
    keywords: 'keywords',
    applicants: 'applicants',
    inventors: 'inventors',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy'
  };

  export type PatentScalarFieldEnum = (typeof PatentScalarFieldEnum)[keyof typeof PatentScalarFieldEnum]


  export const PatentDocumentScalarFieldEnum: {
    id: 'id',
    patentId: 'patentId',
    name: 'name',
    type: 'type',
    fileUrl: 'fileUrl',
    fileSize: 'fileSize',
    uploadedAt: 'uploadedAt',
    uploadedBy: 'uploadedBy'
  };

  export type PatentDocumentScalarFieldEnum = (typeof PatentDocumentScalarFieldEnum)[keyof typeof PatentDocumentScalarFieldEnum]


  export const PatentFeeScalarFieldEnum: {
    id: 'id',
    patentId: 'patentId',
    type: 'type',
    amount: 'amount',
    currency: 'currency',
    dueDate: 'dueDate',
    paidDate: 'paidDate',
    status: 'status',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatentFeeScalarFieldEnum = (typeof PatentFeeScalarFieldEnum)[keyof typeof PatentFeeScalarFieldEnum]


  export const PatentEventScalarFieldEnum: {
    id: 'id',
    patentId: 'patentId',
    type: 'type',
    title: 'title',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatentEventScalarFieldEnum = (typeof PatentEventScalarFieldEnum)[keyof typeof PatentEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    realName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdPatents?: PatentListRelationFilter
    updatedPatents?: PatentListRelationFilter
    uploadedDocuments?: PatentDocumentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdPatents?: PatentOrderByRelationAggregateInput
    updatedPatents?: PatentOrderByRelationAggregateInput
    uploadedDocuments?: PatentDocumentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    realName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdPatents?: PatentListRelationFilter
    updatedPatents?: PatentListRelationFilter
    uploadedDocuments?: PatentDocumentListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    realName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type PatentCategoryWhereInput = {
    AND?: PatentCategoryWhereInput | PatentCategoryWhereInput[]
    OR?: PatentCategoryWhereInput[]
    NOT?: PatentCategoryWhereInput | PatentCategoryWhereInput[]
    id?: IntFilter<"PatentCategory"> | number
    name?: StringFilter<"PatentCategory"> | string
    description?: StringNullableFilter<"PatentCategory"> | string | null
    parentId?: IntNullableFilter<"PatentCategory"> | number | null
    createdAt?: DateTimeFilter<"PatentCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PatentCategory"> | Date | string
    parent?: XOR<PatentCategoryNullableRelationFilter, PatentCategoryWhereInput> | null
    children?: PatentCategoryListRelationFilter
    patents?: PatentListRelationFilter
  }

  export type PatentCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: PatentCategoryOrderByWithRelationInput
    children?: PatentCategoryOrderByRelationAggregateInput
    patents?: PatentOrderByRelationAggregateInput
  }

  export type PatentCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatentCategoryWhereInput | PatentCategoryWhereInput[]
    OR?: PatentCategoryWhereInput[]
    NOT?: PatentCategoryWhereInput | PatentCategoryWhereInput[]
    name?: StringFilter<"PatentCategory"> | string
    description?: StringNullableFilter<"PatentCategory"> | string | null
    parentId?: IntNullableFilter<"PatentCategory"> | number | null
    createdAt?: DateTimeFilter<"PatentCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PatentCategory"> | Date | string
    parent?: XOR<PatentCategoryNullableRelationFilter, PatentCategoryWhereInput> | null
    children?: PatentCategoryListRelationFilter
    patents?: PatentListRelationFilter
  }, "id">

  export type PatentCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatentCategoryCountOrderByAggregateInput
    _avg?: PatentCategoryAvgOrderByAggregateInput
    _max?: PatentCategoryMaxOrderByAggregateInput
    _min?: PatentCategoryMinOrderByAggregateInput
    _sum?: PatentCategorySumOrderByAggregateInput
  }

  export type PatentCategoryScalarWhereWithAggregatesInput = {
    AND?: PatentCategoryScalarWhereWithAggregatesInput | PatentCategoryScalarWhereWithAggregatesInput[]
    OR?: PatentCategoryScalarWhereWithAggregatesInput[]
    NOT?: PatentCategoryScalarWhereWithAggregatesInput | PatentCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PatentCategory"> | number
    name?: StringWithAggregatesFilter<"PatentCategory"> | string
    description?: StringNullableWithAggregatesFilter<"PatentCategory"> | string | null
    parentId?: IntNullableWithAggregatesFilter<"PatentCategory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PatentCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatentCategory"> | Date | string
  }

  export type PatentWhereInput = {
    AND?: PatentWhereInput | PatentWhereInput[]
    OR?: PatentWhereInput[]
    NOT?: PatentWhereInput | PatentWhereInput[]
    id?: IntFilter<"Patent"> | number
    title?: StringFilter<"Patent"> | string
    description?: StringFilter<"Patent"> | string
    patentNumber?: StringFilter<"Patent"> | string
    applicationNumber?: StringFilter<"Patent"> | string
    applicationDate?: DateTimeFilter<"Patent"> | Date | string
    publicationDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    grantDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    status?: StringFilter<"Patent"> | string
    type?: StringFilter<"Patent"> | string
    categoryId?: IntFilter<"Patent"> | number
    priorityDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    priorityCountry?: StringNullableFilter<"Patent"> | string | null
    legalStatus?: StringFilter<"Patent"> | string
    abstract?: StringFilter<"Patent"> | string
    claims?: StringFilter<"Patent"> | string
    technicalField?: StringFilter<"Patent"> | string
    keywords?: StringFilter<"Patent"> | string
    applicants?: StringFilter<"Patent"> | string
    inventors?: StringFilter<"Patent"> | string
    createdAt?: DateTimeFilter<"Patent"> | Date | string
    updatedAt?: DateTimeFilter<"Patent"> | Date | string
    createdBy?: IntFilter<"Patent"> | number
    updatedBy?: IntFilter<"Patent"> | number
    category?: XOR<PatentCategoryRelationFilter, PatentCategoryWhereInput>
    creator?: XOR<UserRelationFilter, UserWhereInput>
    updater?: XOR<UserRelationFilter, UserWhereInput>
    documents?: PatentDocumentListRelationFilter
    fees?: PatentFeeListRelationFilter
    events?: PatentEventListRelationFilter
  }

  export type PatentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    patentNumber?: SortOrder
    applicationNumber?: SortOrder
    applicationDate?: SortOrder
    publicationDate?: SortOrderInput | SortOrder
    grantDate?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    status?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    priorityDate?: SortOrderInput | SortOrder
    priorityCountry?: SortOrderInput | SortOrder
    legalStatus?: SortOrder
    abstract?: SortOrder
    claims?: SortOrder
    technicalField?: SortOrder
    keywords?: SortOrder
    applicants?: SortOrder
    inventors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    category?: PatentCategoryOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    updater?: UserOrderByWithRelationInput
    documents?: PatentDocumentOrderByRelationAggregateInput
    fees?: PatentFeeOrderByRelationAggregateInput
    events?: PatentEventOrderByRelationAggregateInput
  }

  export type PatentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patentNumber?: string
    applicationNumber?: string
    AND?: PatentWhereInput | PatentWhereInput[]
    OR?: PatentWhereInput[]
    NOT?: PatentWhereInput | PatentWhereInput[]
    title?: StringFilter<"Patent"> | string
    description?: StringFilter<"Patent"> | string
    applicationDate?: DateTimeFilter<"Patent"> | Date | string
    publicationDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    grantDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    status?: StringFilter<"Patent"> | string
    type?: StringFilter<"Patent"> | string
    categoryId?: IntFilter<"Patent"> | number
    priorityDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    priorityCountry?: StringNullableFilter<"Patent"> | string | null
    legalStatus?: StringFilter<"Patent"> | string
    abstract?: StringFilter<"Patent"> | string
    claims?: StringFilter<"Patent"> | string
    technicalField?: StringFilter<"Patent"> | string
    keywords?: StringFilter<"Patent"> | string
    applicants?: StringFilter<"Patent"> | string
    inventors?: StringFilter<"Patent"> | string
    createdAt?: DateTimeFilter<"Patent"> | Date | string
    updatedAt?: DateTimeFilter<"Patent"> | Date | string
    createdBy?: IntFilter<"Patent"> | number
    updatedBy?: IntFilter<"Patent"> | number
    category?: XOR<PatentCategoryRelationFilter, PatentCategoryWhereInput>
    creator?: XOR<UserRelationFilter, UserWhereInput>
    updater?: XOR<UserRelationFilter, UserWhereInput>
    documents?: PatentDocumentListRelationFilter
    fees?: PatentFeeListRelationFilter
    events?: PatentEventListRelationFilter
  }, "id" | "patentNumber" | "applicationNumber">

  export type PatentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    patentNumber?: SortOrder
    applicationNumber?: SortOrder
    applicationDate?: SortOrder
    publicationDate?: SortOrderInput | SortOrder
    grantDate?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    status?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    priorityDate?: SortOrderInput | SortOrder
    priorityCountry?: SortOrderInput | SortOrder
    legalStatus?: SortOrder
    abstract?: SortOrder
    claims?: SortOrder
    technicalField?: SortOrder
    keywords?: SortOrder
    applicants?: SortOrder
    inventors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    _count?: PatentCountOrderByAggregateInput
    _avg?: PatentAvgOrderByAggregateInput
    _max?: PatentMaxOrderByAggregateInput
    _min?: PatentMinOrderByAggregateInput
    _sum?: PatentSumOrderByAggregateInput
  }

  export type PatentScalarWhereWithAggregatesInput = {
    AND?: PatentScalarWhereWithAggregatesInput | PatentScalarWhereWithAggregatesInput[]
    OR?: PatentScalarWhereWithAggregatesInput[]
    NOT?: PatentScalarWhereWithAggregatesInput | PatentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patent"> | number
    title?: StringWithAggregatesFilter<"Patent"> | string
    description?: StringWithAggregatesFilter<"Patent"> | string
    patentNumber?: StringWithAggregatesFilter<"Patent"> | string
    applicationNumber?: StringWithAggregatesFilter<"Patent"> | string
    applicationDate?: DateTimeWithAggregatesFilter<"Patent"> | Date | string
    publicationDate?: DateTimeNullableWithAggregatesFilter<"Patent"> | Date | string | null
    grantDate?: DateTimeNullableWithAggregatesFilter<"Patent"> | Date | string | null
    expirationDate?: DateTimeNullableWithAggregatesFilter<"Patent"> | Date | string | null
    status?: StringWithAggregatesFilter<"Patent"> | string
    type?: StringWithAggregatesFilter<"Patent"> | string
    categoryId?: IntWithAggregatesFilter<"Patent"> | number
    priorityDate?: DateTimeNullableWithAggregatesFilter<"Patent"> | Date | string | null
    priorityCountry?: StringNullableWithAggregatesFilter<"Patent"> | string | null
    legalStatus?: StringWithAggregatesFilter<"Patent"> | string
    abstract?: StringWithAggregatesFilter<"Patent"> | string
    claims?: StringWithAggregatesFilter<"Patent"> | string
    technicalField?: StringWithAggregatesFilter<"Patent"> | string
    keywords?: StringWithAggregatesFilter<"Patent"> | string
    applicants?: StringWithAggregatesFilter<"Patent"> | string
    inventors?: StringWithAggregatesFilter<"Patent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Patent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patent"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Patent"> | number
    updatedBy?: IntWithAggregatesFilter<"Patent"> | number
  }

  export type PatentDocumentWhereInput = {
    AND?: PatentDocumentWhereInput | PatentDocumentWhereInput[]
    OR?: PatentDocumentWhereInput[]
    NOT?: PatentDocumentWhereInput | PatentDocumentWhereInput[]
    id?: IntFilter<"PatentDocument"> | number
    patentId?: IntFilter<"PatentDocument"> | number
    name?: StringFilter<"PatentDocument"> | string
    type?: StringFilter<"PatentDocument"> | string
    fileUrl?: StringFilter<"PatentDocument"> | string
    fileSize?: IntFilter<"PatentDocument"> | number
    uploadedAt?: DateTimeFilter<"PatentDocument"> | Date | string
    uploadedBy?: IntFilter<"PatentDocument"> | number
    patent?: XOR<PatentRelationFilter, PatentWhereInput>
    uploader?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PatentDocumentOrderByWithRelationInput = {
    id?: SortOrder
    patentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    uploadedBy?: SortOrder
    patent?: PatentOrderByWithRelationInput
    uploader?: UserOrderByWithRelationInput
  }

  export type PatentDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatentDocumentWhereInput | PatentDocumentWhereInput[]
    OR?: PatentDocumentWhereInput[]
    NOT?: PatentDocumentWhereInput | PatentDocumentWhereInput[]
    patentId?: IntFilter<"PatentDocument"> | number
    name?: StringFilter<"PatentDocument"> | string
    type?: StringFilter<"PatentDocument"> | string
    fileUrl?: StringFilter<"PatentDocument"> | string
    fileSize?: IntFilter<"PatentDocument"> | number
    uploadedAt?: DateTimeFilter<"PatentDocument"> | Date | string
    uploadedBy?: IntFilter<"PatentDocument"> | number
    patent?: XOR<PatentRelationFilter, PatentWhereInput>
    uploader?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PatentDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    patentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    uploadedBy?: SortOrder
    _count?: PatentDocumentCountOrderByAggregateInput
    _avg?: PatentDocumentAvgOrderByAggregateInput
    _max?: PatentDocumentMaxOrderByAggregateInput
    _min?: PatentDocumentMinOrderByAggregateInput
    _sum?: PatentDocumentSumOrderByAggregateInput
  }

  export type PatentDocumentScalarWhereWithAggregatesInput = {
    AND?: PatentDocumentScalarWhereWithAggregatesInput | PatentDocumentScalarWhereWithAggregatesInput[]
    OR?: PatentDocumentScalarWhereWithAggregatesInput[]
    NOT?: PatentDocumentScalarWhereWithAggregatesInput | PatentDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PatentDocument"> | number
    patentId?: IntWithAggregatesFilter<"PatentDocument"> | number
    name?: StringWithAggregatesFilter<"PatentDocument"> | string
    type?: StringWithAggregatesFilter<"PatentDocument"> | string
    fileUrl?: StringWithAggregatesFilter<"PatentDocument"> | string
    fileSize?: IntWithAggregatesFilter<"PatentDocument"> | number
    uploadedAt?: DateTimeWithAggregatesFilter<"PatentDocument"> | Date | string
    uploadedBy?: IntWithAggregatesFilter<"PatentDocument"> | number
  }

  export type PatentFeeWhereInput = {
    AND?: PatentFeeWhereInput | PatentFeeWhereInput[]
    OR?: PatentFeeWhereInput[]
    NOT?: PatentFeeWhereInput | PatentFeeWhereInput[]
    id?: IntFilter<"PatentFee"> | number
    patentId?: IntFilter<"PatentFee"> | number
    type?: StringFilter<"PatentFee"> | string
    amount?: FloatFilter<"PatentFee"> | number
    currency?: StringFilter<"PatentFee"> | string
    dueDate?: DateTimeFilter<"PatentFee"> | Date | string
    paidDate?: DateTimeNullableFilter<"PatentFee"> | Date | string | null
    status?: StringFilter<"PatentFee"> | string
    description?: StringNullableFilter<"PatentFee"> | string | null
    createdAt?: DateTimeFilter<"PatentFee"> | Date | string
    updatedAt?: DateTimeFilter<"PatentFee"> | Date | string
    patent?: XOR<PatentRelationFilter, PatentWhereInput>
  }

  export type PatentFeeOrderByWithRelationInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrderInput | SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patent?: PatentOrderByWithRelationInput
  }

  export type PatentFeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatentFeeWhereInput | PatentFeeWhereInput[]
    OR?: PatentFeeWhereInput[]
    NOT?: PatentFeeWhereInput | PatentFeeWhereInput[]
    patentId?: IntFilter<"PatentFee"> | number
    type?: StringFilter<"PatentFee"> | string
    amount?: FloatFilter<"PatentFee"> | number
    currency?: StringFilter<"PatentFee"> | string
    dueDate?: DateTimeFilter<"PatentFee"> | Date | string
    paidDate?: DateTimeNullableFilter<"PatentFee"> | Date | string | null
    status?: StringFilter<"PatentFee"> | string
    description?: StringNullableFilter<"PatentFee"> | string | null
    createdAt?: DateTimeFilter<"PatentFee"> | Date | string
    updatedAt?: DateTimeFilter<"PatentFee"> | Date | string
    patent?: XOR<PatentRelationFilter, PatentWhereInput>
  }, "id">

  export type PatentFeeOrderByWithAggregationInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrderInput | SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatentFeeCountOrderByAggregateInput
    _avg?: PatentFeeAvgOrderByAggregateInput
    _max?: PatentFeeMaxOrderByAggregateInput
    _min?: PatentFeeMinOrderByAggregateInput
    _sum?: PatentFeeSumOrderByAggregateInput
  }

  export type PatentFeeScalarWhereWithAggregatesInput = {
    AND?: PatentFeeScalarWhereWithAggregatesInput | PatentFeeScalarWhereWithAggregatesInput[]
    OR?: PatentFeeScalarWhereWithAggregatesInput[]
    NOT?: PatentFeeScalarWhereWithAggregatesInput | PatentFeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PatentFee"> | number
    patentId?: IntWithAggregatesFilter<"PatentFee"> | number
    type?: StringWithAggregatesFilter<"PatentFee"> | string
    amount?: FloatWithAggregatesFilter<"PatentFee"> | number
    currency?: StringWithAggregatesFilter<"PatentFee"> | string
    dueDate?: DateTimeWithAggregatesFilter<"PatentFee"> | Date | string
    paidDate?: DateTimeNullableWithAggregatesFilter<"PatentFee"> | Date | string | null
    status?: StringWithAggregatesFilter<"PatentFee"> | string
    description?: StringNullableWithAggregatesFilter<"PatentFee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PatentFee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatentFee"> | Date | string
  }

  export type PatentEventWhereInput = {
    AND?: PatentEventWhereInput | PatentEventWhereInput[]
    OR?: PatentEventWhereInput[]
    NOT?: PatentEventWhereInput | PatentEventWhereInput[]
    id?: IntFilter<"PatentEvent"> | number
    patentId?: IntFilter<"PatentEvent"> | number
    type?: StringFilter<"PatentEvent"> | string
    title?: StringFilter<"PatentEvent"> | string
    description?: StringFilter<"PatentEvent"> | string
    date?: DateTimeFilter<"PatentEvent"> | Date | string
    createdAt?: DateTimeFilter<"PatentEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PatentEvent"> | Date | string
    patent?: XOR<PatentRelationFilter, PatentWhereInput>
  }

  export type PatentEventOrderByWithRelationInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patent?: PatentOrderByWithRelationInput
  }

  export type PatentEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatentEventWhereInput | PatentEventWhereInput[]
    OR?: PatentEventWhereInput[]
    NOT?: PatentEventWhereInput | PatentEventWhereInput[]
    patentId?: IntFilter<"PatentEvent"> | number
    type?: StringFilter<"PatentEvent"> | string
    title?: StringFilter<"PatentEvent"> | string
    description?: StringFilter<"PatentEvent"> | string
    date?: DateTimeFilter<"PatentEvent"> | Date | string
    createdAt?: DateTimeFilter<"PatentEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PatentEvent"> | Date | string
    patent?: XOR<PatentRelationFilter, PatentWhereInput>
  }, "id">

  export type PatentEventOrderByWithAggregationInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatentEventCountOrderByAggregateInput
    _avg?: PatentEventAvgOrderByAggregateInput
    _max?: PatentEventMaxOrderByAggregateInput
    _min?: PatentEventMinOrderByAggregateInput
    _sum?: PatentEventSumOrderByAggregateInput
  }

  export type PatentEventScalarWhereWithAggregatesInput = {
    AND?: PatentEventScalarWhereWithAggregatesInput | PatentEventScalarWhereWithAggregatesInput[]
    OR?: PatentEventScalarWhereWithAggregatesInput[]
    NOT?: PatentEventScalarWhereWithAggregatesInput | PatentEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PatentEvent"> | number
    patentId?: IntWithAggregatesFilter<"PatentEvent"> | number
    type?: StringWithAggregatesFilter<"PatentEvent"> | string
    title?: StringWithAggregatesFilter<"PatentEvent"> | string
    description?: StringWithAggregatesFilter<"PatentEvent"> | string
    date?: DateTimeWithAggregatesFilter<"PatentEvent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PatentEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatentEvent"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    createdPatents?: PatentCreateNestedManyWithoutCreatorInput
    updatedPatents?: PatentCreateNestedManyWithoutUpdaterInput
    uploadedDocuments?: PatentDocumentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    createdPatents?: PatentUncheckedCreateNestedManyWithoutCreatorInput
    updatedPatents?: PatentUncheckedCreateNestedManyWithoutUpdaterInput
    uploadedDocuments?: PatentDocumentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdPatents?: PatentUpdateManyWithoutCreatorNestedInput
    updatedPatents?: PatentUpdateManyWithoutUpdaterNestedInput
    uploadedDocuments?: PatentDocumentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdPatents?: PatentUncheckedUpdateManyWithoutCreatorNestedInput
    updatedPatents?: PatentUncheckedUpdateManyWithoutUpdaterNestedInput
    uploadedDocuments?: PatentDocumentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatentCategoryCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PatentCategoryCreateNestedOneWithoutChildrenInput
    children?: PatentCategoryCreateNestedManyWithoutParentInput
    patents?: PatentCreateNestedManyWithoutCategoryInput
  }

  export type PatentCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PatentCategoryUncheckedCreateNestedManyWithoutParentInput
    patents?: PatentUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PatentCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PatentCategoryUpdateOneWithoutChildrenNestedInput
    children?: PatentCategoryUpdateManyWithoutParentNestedInput
    patents?: PatentUpdateManyWithoutCategoryNestedInput
  }

  export type PatentCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PatentCategoryUncheckedUpdateManyWithoutParentNestedInput
    patents?: PatentUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PatentCategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentCreateInput = {
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PatentCategoryCreateNestedOneWithoutPatentsInput
    creator: UserCreateNestedOneWithoutCreatedPatentsInput
    updater: UserCreateNestedOneWithoutUpdatedPatentsInput
    documents?: PatentDocumentCreateNestedManyWithoutPatentInput
    fees?: PatentFeeCreateNestedManyWithoutPatentInput
    events?: PatentEventCreateNestedManyWithoutPatentInput
  }

  export type PatentUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    updatedBy: number
    documents?: PatentDocumentUncheckedCreateNestedManyWithoutPatentInput
    fees?: PatentFeeUncheckedCreateNestedManyWithoutPatentInput
    events?: PatentEventUncheckedCreateNestedManyWithoutPatentInput
  }

  export type PatentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PatentCategoryUpdateOneRequiredWithoutPatentsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedPatentsNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedPatentsNestedInput
    documents?: PatentDocumentUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUpdateManyWithoutPatentNestedInput
    events?: PatentEventUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    documents?: PatentDocumentUncheckedUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUncheckedUpdateManyWithoutPatentNestedInput
    events?: PatentEventUncheckedUpdateManyWithoutPatentNestedInput
  }

  export type PatentCreateManyInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    updatedBy: number
  }

  export type PatentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PatentDocumentCreateInput = {
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
    patent: PatentCreateNestedOneWithoutDocumentsInput
    uploader: UserCreateNestedOneWithoutUploadedDocumentsInput
  }

  export type PatentDocumentUncheckedCreateInput = {
    id?: number
    patentId: number
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
    uploadedBy: number
  }

  export type PatentDocumentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patent?: PatentUpdateOneRequiredWithoutDocumentsNestedInput
    uploader?: UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput
  }

  export type PatentDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PatentDocumentCreateManyInput = {
    id?: number
    patentId: number
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
    uploadedBy: number
  }

  export type PatentDocumentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PatentFeeCreateInput = {
    type: string
    amount: number
    currency?: string
    dueDate: Date | string
    paidDate?: Date | string | null
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patent: PatentCreateNestedOneWithoutFeesInput
  }

  export type PatentFeeUncheckedCreateInput = {
    id?: number
    patentId: number
    type: string
    amount: number
    currency?: string
    dueDate: Date | string
    paidDate?: Date | string | null
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentFeeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patent?: PatentUpdateOneRequiredWithoutFeesNestedInput
  }

  export type PatentFeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patentId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentFeeCreateManyInput = {
    id?: number
    patentId: number
    type: string
    amount: number
    currency?: string
    dueDate: Date | string
    paidDate?: Date | string | null
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentFeeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentFeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patentId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentEventCreateInput = {
    type: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patent: PatentCreateNestedOneWithoutEventsInput
  }

  export type PatentEventUncheckedCreateInput = {
    id?: number
    patentId: number
    type: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentEventUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patent?: PatentUpdateOneRequiredWithoutEventsNestedInput
  }

  export type PatentEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patentId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentEventCreateManyInput = {
    id?: number
    patentId: number
    type: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentEventUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patentId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PatentListRelationFilter = {
    every?: PatentWhereInput
    some?: PatentWhereInput
    none?: PatentWhereInput
  }

  export type PatentDocumentListRelationFilter = {
    every?: PatentDocumentWhereInput
    some?: PatentDocumentWhereInput
    none?: PatentDocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatentDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PatentCategoryNullableRelationFilter = {
    is?: PatentCategoryWhereInput | null
    isNot?: PatentCategoryWhereInput | null
  }

  export type PatentCategoryListRelationFilter = {
    every?: PatentCategoryWhereInput
    some?: PatentCategoryWhereInput
    none?: PatentCategoryWhereInput
  }

  export type PatentCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatentCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type PatentCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentCategorySumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PatentCategoryRelationFilter = {
    is?: PatentCategoryWhereInput
    isNot?: PatentCategoryWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PatentFeeListRelationFilter = {
    every?: PatentFeeWhereInput
    some?: PatentFeeWhereInput
    none?: PatentFeeWhereInput
  }

  export type PatentEventListRelationFilter = {
    every?: PatentEventWhereInput
    some?: PatentEventWhereInput
    none?: PatentEventWhereInput
  }

  export type PatentFeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatentEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    patentNumber?: SortOrder
    applicationNumber?: SortOrder
    applicationDate?: SortOrder
    publicationDate?: SortOrder
    grantDate?: SortOrder
    expirationDate?: SortOrder
    status?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    priorityDate?: SortOrder
    priorityCountry?: SortOrder
    legalStatus?: SortOrder
    abstract?: SortOrder
    claims?: SortOrder
    technicalField?: SortOrder
    keywords?: SortOrder
    applicants?: SortOrder
    inventors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type PatentAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type PatentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    patentNumber?: SortOrder
    applicationNumber?: SortOrder
    applicationDate?: SortOrder
    publicationDate?: SortOrder
    grantDate?: SortOrder
    expirationDate?: SortOrder
    status?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    priorityDate?: SortOrder
    priorityCountry?: SortOrder
    legalStatus?: SortOrder
    abstract?: SortOrder
    claims?: SortOrder
    technicalField?: SortOrder
    keywords?: SortOrder
    applicants?: SortOrder
    inventors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type PatentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    patentNumber?: SortOrder
    applicationNumber?: SortOrder
    applicationDate?: SortOrder
    publicationDate?: SortOrder
    grantDate?: SortOrder
    expirationDate?: SortOrder
    status?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    priorityDate?: SortOrder
    priorityCountry?: SortOrder
    legalStatus?: SortOrder
    abstract?: SortOrder
    claims?: SortOrder
    technicalField?: SortOrder
    keywords?: SortOrder
    applicants?: SortOrder
    inventors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type PatentSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type PatentRelationFilter = {
    is?: PatentWhereInput
    isNot?: PatentWhereInput
  }

  export type PatentDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    uploadedBy?: SortOrder
  }

  export type PatentDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    fileSize?: SortOrder
    uploadedBy?: SortOrder
  }

  export type PatentDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    uploadedBy?: SortOrder
  }

  export type PatentDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    uploadedBy?: SortOrder
  }

  export type PatentDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    fileSize?: SortOrder
    uploadedBy?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PatentFeeCountOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentFeeAvgOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    amount?: SortOrder
  }

  export type PatentFeeMaxOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentFeeMinOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentFeeSumOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PatentEventCountOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentEventAvgOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
  }

  export type PatentEventMaxOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentEventMinOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatentEventSumOrderByAggregateInput = {
    id?: SortOrder
    patentId?: SortOrder
  }

  export type PatentCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PatentCreateWithoutCreatorInput, PatentUncheckedCreateWithoutCreatorInput> | PatentCreateWithoutCreatorInput[] | PatentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutCreatorInput | PatentCreateOrConnectWithoutCreatorInput[]
    createMany?: PatentCreateManyCreatorInputEnvelope
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
  }

  export type PatentCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<PatentCreateWithoutUpdaterInput, PatentUncheckedCreateWithoutUpdaterInput> | PatentCreateWithoutUpdaterInput[] | PatentUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutUpdaterInput | PatentCreateOrConnectWithoutUpdaterInput[]
    createMany?: PatentCreateManyUpdaterInputEnvelope
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
  }

  export type PatentDocumentCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PatentDocumentCreateWithoutUploaderInput, PatentDocumentUncheckedCreateWithoutUploaderInput> | PatentDocumentCreateWithoutUploaderInput[] | PatentDocumentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PatentDocumentCreateOrConnectWithoutUploaderInput | PatentDocumentCreateOrConnectWithoutUploaderInput[]
    createMany?: PatentDocumentCreateManyUploaderInputEnvelope
    connect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
  }

  export type PatentUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PatentCreateWithoutCreatorInput, PatentUncheckedCreateWithoutCreatorInput> | PatentCreateWithoutCreatorInput[] | PatentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutCreatorInput | PatentCreateOrConnectWithoutCreatorInput[]
    createMany?: PatentCreateManyCreatorInputEnvelope
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
  }

  export type PatentUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<PatentCreateWithoutUpdaterInput, PatentUncheckedCreateWithoutUpdaterInput> | PatentCreateWithoutUpdaterInput[] | PatentUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutUpdaterInput | PatentCreateOrConnectWithoutUpdaterInput[]
    createMany?: PatentCreateManyUpdaterInputEnvelope
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
  }

  export type PatentDocumentUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PatentDocumentCreateWithoutUploaderInput, PatentDocumentUncheckedCreateWithoutUploaderInput> | PatentDocumentCreateWithoutUploaderInput[] | PatentDocumentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PatentDocumentCreateOrConnectWithoutUploaderInput | PatentDocumentCreateOrConnectWithoutUploaderInput[]
    createMany?: PatentDocumentCreateManyUploaderInputEnvelope
    connect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatentUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PatentCreateWithoutCreatorInput, PatentUncheckedCreateWithoutCreatorInput> | PatentCreateWithoutCreatorInput[] | PatentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutCreatorInput | PatentCreateOrConnectWithoutCreatorInput[]
    upsert?: PatentUpsertWithWhereUniqueWithoutCreatorInput | PatentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PatentCreateManyCreatorInputEnvelope
    set?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    disconnect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    delete?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    update?: PatentUpdateWithWhereUniqueWithoutCreatorInput | PatentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PatentUpdateManyWithWhereWithoutCreatorInput | PatentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PatentScalarWhereInput | PatentScalarWhereInput[]
  }

  export type PatentUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<PatentCreateWithoutUpdaterInput, PatentUncheckedCreateWithoutUpdaterInput> | PatentCreateWithoutUpdaterInput[] | PatentUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutUpdaterInput | PatentCreateOrConnectWithoutUpdaterInput[]
    upsert?: PatentUpsertWithWhereUniqueWithoutUpdaterInput | PatentUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: PatentCreateManyUpdaterInputEnvelope
    set?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    disconnect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    delete?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    update?: PatentUpdateWithWhereUniqueWithoutUpdaterInput | PatentUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: PatentUpdateManyWithWhereWithoutUpdaterInput | PatentUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: PatentScalarWhereInput | PatentScalarWhereInput[]
  }

  export type PatentDocumentUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PatentDocumentCreateWithoutUploaderInput, PatentDocumentUncheckedCreateWithoutUploaderInput> | PatentDocumentCreateWithoutUploaderInput[] | PatentDocumentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PatentDocumentCreateOrConnectWithoutUploaderInput | PatentDocumentCreateOrConnectWithoutUploaderInput[]
    upsert?: PatentDocumentUpsertWithWhereUniqueWithoutUploaderInput | PatentDocumentUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: PatentDocumentCreateManyUploaderInputEnvelope
    set?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    disconnect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    delete?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    connect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    update?: PatentDocumentUpdateWithWhereUniqueWithoutUploaderInput | PatentDocumentUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: PatentDocumentUpdateManyWithWhereWithoutUploaderInput | PatentDocumentUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: PatentDocumentScalarWhereInput | PatentDocumentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatentUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PatentCreateWithoutCreatorInput, PatentUncheckedCreateWithoutCreatorInput> | PatentCreateWithoutCreatorInput[] | PatentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutCreatorInput | PatentCreateOrConnectWithoutCreatorInput[]
    upsert?: PatentUpsertWithWhereUniqueWithoutCreatorInput | PatentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PatentCreateManyCreatorInputEnvelope
    set?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    disconnect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    delete?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    update?: PatentUpdateWithWhereUniqueWithoutCreatorInput | PatentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PatentUpdateManyWithWhereWithoutCreatorInput | PatentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PatentScalarWhereInput | PatentScalarWhereInput[]
  }

  export type PatentUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<PatentCreateWithoutUpdaterInput, PatentUncheckedCreateWithoutUpdaterInput> | PatentCreateWithoutUpdaterInput[] | PatentUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutUpdaterInput | PatentCreateOrConnectWithoutUpdaterInput[]
    upsert?: PatentUpsertWithWhereUniqueWithoutUpdaterInput | PatentUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: PatentCreateManyUpdaterInputEnvelope
    set?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    disconnect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    delete?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    update?: PatentUpdateWithWhereUniqueWithoutUpdaterInput | PatentUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: PatentUpdateManyWithWhereWithoutUpdaterInput | PatentUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: PatentScalarWhereInput | PatentScalarWhereInput[]
  }

  export type PatentDocumentUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PatentDocumentCreateWithoutUploaderInput, PatentDocumentUncheckedCreateWithoutUploaderInput> | PatentDocumentCreateWithoutUploaderInput[] | PatentDocumentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PatentDocumentCreateOrConnectWithoutUploaderInput | PatentDocumentCreateOrConnectWithoutUploaderInput[]
    upsert?: PatentDocumentUpsertWithWhereUniqueWithoutUploaderInput | PatentDocumentUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: PatentDocumentCreateManyUploaderInputEnvelope
    set?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    disconnect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    delete?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    connect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    update?: PatentDocumentUpdateWithWhereUniqueWithoutUploaderInput | PatentDocumentUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: PatentDocumentUpdateManyWithWhereWithoutUploaderInput | PatentDocumentUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: PatentDocumentScalarWhereInput | PatentDocumentScalarWhereInput[]
  }

  export type PatentCategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<PatentCategoryCreateWithoutChildrenInput, PatentCategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PatentCategoryCreateOrConnectWithoutChildrenInput
    connect?: PatentCategoryWhereUniqueInput
  }

  export type PatentCategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<PatentCategoryCreateWithoutParentInput, PatentCategoryUncheckedCreateWithoutParentInput> | PatentCategoryCreateWithoutParentInput[] | PatentCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PatentCategoryCreateOrConnectWithoutParentInput | PatentCategoryCreateOrConnectWithoutParentInput[]
    createMany?: PatentCategoryCreateManyParentInputEnvelope
    connect?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
  }

  export type PatentCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PatentCreateWithoutCategoryInput, PatentUncheckedCreateWithoutCategoryInput> | PatentCreateWithoutCategoryInput[] | PatentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutCategoryInput | PatentCreateOrConnectWithoutCategoryInput[]
    createMany?: PatentCreateManyCategoryInputEnvelope
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
  }

  export type PatentCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<PatentCategoryCreateWithoutParentInput, PatentCategoryUncheckedCreateWithoutParentInput> | PatentCategoryCreateWithoutParentInput[] | PatentCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PatentCategoryCreateOrConnectWithoutParentInput | PatentCategoryCreateOrConnectWithoutParentInput[]
    createMany?: PatentCategoryCreateManyParentInputEnvelope
    connect?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
  }

  export type PatentUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PatentCreateWithoutCategoryInput, PatentUncheckedCreateWithoutCategoryInput> | PatentCreateWithoutCategoryInput[] | PatentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutCategoryInput | PatentCreateOrConnectWithoutCategoryInput[]
    createMany?: PatentCreateManyCategoryInputEnvelope
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
  }

  export type PatentCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<PatentCategoryCreateWithoutChildrenInput, PatentCategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PatentCategoryCreateOrConnectWithoutChildrenInput
    upsert?: PatentCategoryUpsertWithoutChildrenInput
    disconnect?: PatentCategoryWhereInput | boolean
    delete?: PatentCategoryWhereInput | boolean
    connect?: PatentCategoryWhereUniqueInput
    update?: XOR<XOR<PatentCategoryUpdateToOneWithWhereWithoutChildrenInput, PatentCategoryUpdateWithoutChildrenInput>, PatentCategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type PatentCategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<PatentCategoryCreateWithoutParentInput, PatentCategoryUncheckedCreateWithoutParentInput> | PatentCategoryCreateWithoutParentInput[] | PatentCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PatentCategoryCreateOrConnectWithoutParentInput | PatentCategoryCreateOrConnectWithoutParentInput[]
    upsert?: PatentCategoryUpsertWithWhereUniqueWithoutParentInput | PatentCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PatentCategoryCreateManyParentInputEnvelope
    set?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
    disconnect?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
    delete?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
    connect?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
    update?: PatentCategoryUpdateWithWhereUniqueWithoutParentInput | PatentCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PatentCategoryUpdateManyWithWhereWithoutParentInput | PatentCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PatentCategoryScalarWhereInput | PatentCategoryScalarWhereInput[]
  }

  export type PatentUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PatentCreateWithoutCategoryInput, PatentUncheckedCreateWithoutCategoryInput> | PatentCreateWithoutCategoryInput[] | PatentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutCategoryInput | PatentCreateOrConnectWithoutCategoryInput[]
    upsert?: PatentUpsertWithWhereUniqueWithoutCategoryInput | PatentUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PatentCreateManyCategoryInputEnvelope
    set?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    disconnect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    delete?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    update?: PatentUpdateWithWhereUniqueWithoutCategoryInput | PatentUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PatentUpdateManyWithWhereWithoutCategoryInput | PatentUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PatentScalarWhereInput | PatentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatentCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<PatentCategoryCreateWithoutParentInput, PatentCategoryUncheckedCreateWithoutParentInput> | PatentCategoryCreateWithoutParentInput[] | PatentCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PatentCategoryCreateOrConnectWithoutParentInput | PatentCategoryCreateOrConnectWithoutParentInput[]
    upsert?: PatentCategoryUpsertWithWhereUniqueWithoutParentInput | PatentCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PatentCategoryCreateManyParentInputEnvelope
    set?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
    disconnect?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
    delete?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
    connect?: PatentCategoryWhereUniqueInput | PatentCategoryWhereUniqueInput[]
    update?: PatentCategoryUpdateWithWhereUniqueWithoutParentInput | PatentCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PatentCategoryUpdateManyWithWhereWithoutParentInput | PatentCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PatentCategoryScalarWhereInput | PatentCategoryScalarWhereInput[]
  }

  export type PatentUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PatentCreateWithoutCategoryInput, PatentUncheckedCreateWithoutCategoryInput> | PatentCreateWithoutCategoryInput[] | PatentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PatentCreateOrConnectWithoutCategoryInput | PatentCreateOrConnectWithoutCategoryInput[]
    upsert?: PatentUpsertWithWhereUniqueWithoutCategoryInput | PatentUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PatentCreateManyCategoryInputEnvelope
    set?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    disconnect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    delete?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    connect?: PatentWhereUniqueInput | PatentWhereUniqueInput[]
    update?: PatentUpdateWithWhereUniqueWithoutCategoryInput | PatentUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PatentUpdateManyWithWhereWithoutCategoryInput | PatentUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PatentScalarWhereInput | PatentScalarWhereInput[]
  }

  export type PatentCategoryCreateNestedOneWithoutPatentsInput = {
    create?: XOR<PatentCategoryCreateWithoutPatentsInput, PatentCategoryUncheckedCreateWithoutPatentsInput>
    connectOrCreate?: PatentCategoryCreateOrConnectWithoutPatentsInput
    connect?: PatentCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedPatentsInput = {
    create?: XOR<UserCreateWithoutCreatedPatentsInput, UserUncheckedCreateWithoutCreatedPatentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPatentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedPatentsInput = {
    create?: XOR<UserCreateWithoutUpdatedPatentsInput, UserUncheckedCreateWithoutUpdatedPatentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedPatentsInput
    connect?: UserWhereUniqueInput
  }

  export type PatentDocumentCreateNestedManyWithoutPatentInput = {
    create?: XOR<PatentDocumentCreateWithoutPatentInput, PatentDocumentUncheckedCreateWithoutPatentInput> | PatentDocumentCreateWithoutPatentInput[] | PatentDocumentUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentDocumentCreateOrConnectWithoutPatentInput | PatentDocumentCreateOrConnectWithoutPatentInput[]
    createMany?: PatentDocumentCreateManyPatentInputEnvelope
    connect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
  }

  export type PatentFeeCreateNestedManyWithoutPatentInput = {
    create?: XOR<PatentFeeCreateWithoutPatentInput, PatentFeeUncheckedCreateWithoutPatentInput> | PatentFeeCreateWithoutPatentInput[] | PatentFeeUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentFeeCreateOrConnectWithoutPatentInput | PatentFeeCreateOrConnectWithoutPatentInput[]
    createMany?: PatentFeeCreateManyPatentInputEnvelope
    connect?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
  }

  export type PatentEventCreateNestedManyWithoutPatentInput = {
    create?: XOR<PatentEventCreateWithoutPatentInput, PatentEventUncheckedCreateWithoutPatentInput> | PatentEventCreateWithoutPatentInput[] | PatentEventUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentEventCreateOrConnectWithoutPatentInput | PatentEventCreateOrConnectWithoutPatentInput[]
    createMany?: PatentEventCreateManyPatentInputEnvelope
    connect?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
  }

  export type PatentDocumentUncheckedCreateNestedManyWithoutPatentInput = {
    create?: XOR<PatentDocumentCreateWithoutPatentInput, PatentDocumentUncheckedCreateWithoutPatentInput> | PatentDocumentCreateWithoutPatentInput[] | PatentDocumentUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentDocumentCreateOrConnectWithoutPatentInput | PatentDocumentCreateOrConnectWithoutPatentInput[]
    createMany?: PatentDocumentCreateManyPatentInputEnvelope
    connect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
  }

  export type PatentFeeUncheckedCreateNestedManyWithoutPatentInput = {
    create?: XOR<PatentFeeCreateWithoutPatentInput, PatentFeeUncheckedCreateWithoutPatentInput> | PatentFeeCreateWithoutPatentInput[] | PatentFeeUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentFeeCreateOrConnectWithoutPatentInput | PatentFeeCreateOrConnectWithoutPatentInput[]
    createMany?: PatentFeeCreateManyPatentInputEnvelope
    connect?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
  }

  export type PatentEventUncheckedCreateNestedManyWithoutPatentInput = {
    create?: XOR<PatentEventCreateWithoutPatentInput, PatentEventUncheckedCreateWithoutPatentInput> | PatentEventCreateWithoutPatentInput[] | PatentEventUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentEventCreateOrConnectWithoutPatentInput | PatentEventCreateOrConnectWithoutPatentInput[]
    createMany?: PatentEventCreateManyPatentInputEnvelope
    connect?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
  }

  export type PatentCategoryUpdateOneRequiredWithoutPatentsNestedInput = {
    create?: XOR<PatentCategoryCreateWithoutPatentsInput, PatentCategoryUncheckedCreateWithoutPatentsInput>
    connectOrCreate?: PatentCategoryCreateOrConnectWithoutPatentsInput
    upsert?: PatentCategoryUpsertWithoutPatentsInput
    connect?: PatentCategoryWhereUniqueInput
    update?: XOR<XOR<PatentCategoryUpdateToOneWithWhereWithoutPatentsInput, PatentCategoryUpdateWithoutPatentsInput>, PatentCategoryUncheckedUpdateWithoutPatentsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedPatentsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedPatentsInput, UserUncheckedCreateWithoutCreatedPatentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPatentsInput
    upsert?: UserUpsertWithoutCreatedPatentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedPatentsInput, UserUpdateWithoutCreatedPatentsInput>, UserUncheckedUpdateWithoutCreatedPatentsInput>
  }

  export type UserUpdateOneRequiredWithoutUpdatedPatentsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedPatentsInput, UserUncheckedCreateWithoutUpdatedPatentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedPatentsInput
    upsert?: UserUpsertWithoutUpdatedPatentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedPatentsInput, UserUpdateWithoutUpdatedPatentsInput>, UserUncheckedUpdateWithoutUpdatedPatentsInput>
  }

  export type PatentDocumentUpdateManyWithoutPatentNestedInput = {
    create?: XOR<PatentDocumentCreateWithoutPatentInput, PatentDocumentUncheckedCreateWithoutPatentInput> | PatentDocumentCreateWithoutPatentInput[] | PatentDocumentUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentDocumentCreateOrConnectWithoutPatentInput | PatentDocumentCreateOrConnectWithoutPatentInput[]
    upsert?: PatentDocumentUpsertWithWhereUniqueWithoutPatentInput | PatentDocumentUpsertWithWhereUniqueWithoutPatentInput[]
    createMany?: PatentDocumentCreateManyPatentInputEnvelope
    set?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    disconnect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    delete?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    connect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    update?: PatentDocumentUpdateWithWhereUniqueWithoutPatentInput | PatentDocumentUpdateWithWhereUniqueWithoutPatentInput[]
    updateMany?: PatentDocumentUpdateManyWithWhereWithoutPatentInput | PatentDocumentUpdateManyWithWhereWithoutPatentInput[]
    deleteMany?: PatentDocumentScalarWhereInput | PatentDocumentScalarWhereInput[]
  }

  export type PatentFeeUpdateManyWithoutPatentNestedInput = {
    create?: XOR<PatentFeeCreateWithoutPatentInput, PatentFeeUncheckedCreateWithoutPatentInput> | PatentFeeCreateWithoutPatentInput[] | PatentFeeUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentFeeCreateOrConnectWithoutPatentInput | PatentFeeCreateOrConnectWithoutPatentInput[]
    upsert?: PatentFeeUpsertWithWhereUniqueWithoutPatentInput | PatentFeeUpsertWithWhereUniqueWithoutPatentInput[]
    createMany?: PatentFeeCreateManyPatentInputEnvelope
    set?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
    disconnect?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
    delete?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
    connect?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
    update?: PatentFeeUpdateWithWhereUniqueWithoutPatentInput | PatentFeeUpdateWithWhereUniqueWithoutPatentInput[]
    updateMany?: PatentFeeUpdateManyWithWhereWithoutPatentInput | PatentFeeUpdateManyWithWhereWithoutPatentInput[]
    deleteMany?: PatentFeeScalarWhereInput | PatentFeeScalarWhereInput[]
  }

  export type PatentEventUpdateManyWithoutPatentNestedInput = {
    create?: XOR<PatentEventCreateWithoutPatentInput, PatentEventUncheckedCreateWithoutPatentInput> | PatentEventCreateWithoutPatentInput[] | PatentEventUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentEventCreateOrConnectWithoutPatentInput | PatentEventCreateOrConnectWithoutPatentInput[]
    upsert?: PatentEventUpsertWithWhereUniqueWithoutPatentInput | PatentEventUpsertWithWhereUniqueWithoutPatentInput[]
    createMany?: PatentEventCreateManyPatentInputEnvelope
    set?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
    disconnect?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
    delete?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
    connect?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
    update?: PatentEventUpdateWithWhereUniqueWithoutPatentInput | PatentEventUpdateWithWhereUniqueWithoutPatentInput[]
    updateMany?: PatentEventUpdateManyWithWhereWithoutPatentInput | PatentEventUpdateManyWithWhereWithoutPatentInput[]
    deleteMany?: PatentEventScalarWhereInput | PatentEventScalarWhereInput[]
  }

  export type PatentDocumentUncheckedUpdateManyWithoutPatentNestedInput = {
    create?: XOR<PatentDocumentCreateWithoutPatentInput, PatentDocumentUncheckedCreateWithoutPatentInput> | PatentDocumentCreateWithoutPatentInput[] | PatentDocumentUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentDocumentCreateOrConnectWithoutPatentInput | PatentDocumentCreateOrConnectWithoutPatentInput[]
    upsert?: PatentDocumentUpsertWithWhereUniqueWithoutPatentInput | PatentDocumentUpsertWithWhereUniqueWithoutPatentInput[]
    createMany?: PatentDocumentCreateManyPatentInputEnvelope
    set?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    disconnect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    delete?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    connect?: PatentDocumentWhereUniqueInput | PatentDocumentWhereUniqueInput[]
    update?: PatentDocumentUpdateWithWhereUniqueWithoutPatentInput | PatentDocumentUpdateWithWhereUniqueWithoutPatentInput[]
    updateMany?: PatentDocumentUpdateManyWithWhereWithoutPatentInput | PatentDocumentUpdateManyWithWhereWithoutPatentInput[]
    deleteMany?: PatentDocumentScalarWhereInput | PatentDocumentScalarWhereInput[]
  }

  export type PatentFeeUncheckedUpdateManyWithoutPatentNestedInput = {
    create?: XOR<PatentFeeCreateWithoutPatentInput, PatentFeeUncheckedCreateWithoutPatentInput> | PatentFeeCreateWithoutPatentInput[] | PatentFeeUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentFeeCreateOrConnectWithoutPatentInput | PatentFeeCreateOrConnectWithoutPatentInput[]
    upsert?: PatentFeeUpsertWithWhereUniqueWithoutPatentInput | PatentFeeUpsertWithWhereUniqueWithoutPatentInput[]
    createMany?: PatentFeeCreateManyPatentInputEnvelope
    set?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
    disconnect?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
    delete?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
    connect?: PatentFeeWhereUniqueInput | PatentFeeWhereUniqueInput[]
    update?: PatentFeeUpdateWithWhereUniqueWithoutPatentInput | PatentFeeUpdateWithWhereUniqueWithoutPatentInput[]
    updateMany?: PatentFeeUpdateManyWithWhereWithoutPatentInput | PatentFeeUpdateManyWithWhereWithoutPatentInput[]
    deleteMany?: PatentFeeScalarWhereInput | PatentFeeScalarWhereInput[]
  }

  export type PatentEventUncheckedUpdateManyWithoutPatentNestedInput = {
    create?: XOR<PatentEventCreateWithoutPatentInput, PatentEventUncheckedCreateWithoutPatentInput> | PatentEventCreateWithoutPatentInput[] | PatentEventUncheckedCreateWithoutPatentInput[]
    connectOrCreate?: PatentEventCreateOrConnectWithoutPatentInput | PatentEventCreateOrConnectWithoutPatentInput[]
    upsert?: PatentEventUpsertWithWhereUniqueWithoutPatentInput | PatentEventUpsertWithWhereUniqueWithoutPatentInput[]
    createMany?: PatentEventCreateManyPatentInputEnvelope
    set?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
    disconnect?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
    delete?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
    connect?: PatentEventWhereUniqueInput | PatentEventWhereUniqueInput[]
    update?: PatentEventUpdateWithWhereUniqueWithoutPatentInput | PatentEventUpdateWithWhereUniqueWithoutPatentInput[]
    updateMany?: PatentEventUpdateManyWithWhereWithoutPatentInput | PatentEventUpdateManyWithWhereWithoutPatentInput[]
    deleteMany?: PatentEventScalarWhereInput | PatentEventScalarWhereInput[]
  }

  export type PatentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<PatentCreateWithoutDocumentsInput, PatentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PatentCreateOrConnectWithoutDocumentsInput
    connect?: PatentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUploadedDocumentsInput = {
    create?: XOR<UserCreateWithoutUploadedDocumentsInput, UserUncheckedCreateWithoutUploadedDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type PatentUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<PatentCreateWithoutDocumentsInput, PatentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PatentCreateOrConnectWithoutDocumentsInput
    upsert?: PatentUpsertWithoutDocumentsInput
    connect?: PatentWhereUniqueInput
    update?: XOR<XOR<PatentUpdateToOneWithWhereWithoutDocumentsInput, PatentUpdateWithoutDocumentsInput>, PatentUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutUploadedDocumentsInput, UserUncheckedCreateWithoutUploadedDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedDocumentsInput
    upsert?: UserUpsertWithoutUploadedDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedDocumentsInput, UserUpdateWithoutUploadedDocumentsInput>, UserUncheckedUpdateWithoutUploadedDocumentsInput>
  }

  export type PatentCreateNestedOneWithoutFeesInput = {
    create?: XOR<PatentCreateWithoutFeesInput, PatentUncheckedCreateWithoutFeesInput>
    connectOrCreate?: PatentCreateOrConnectWithoutFeesInput
    connect?: PatentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatentUpdateOneRequiredWithoutFeesNestedInput = {
    create?: XOR<PatentCreateWithoutFeesInput, PatentUncheckedCreateWithoutFeesInput>
    connectOrCreate?: PatentCreateOrConnectWithoutFeesInput
    upsert?: PatentUpsertWithoutFeesInput
    connect?: PatentWhereUniqueInput
    update?: XOR<XOR<PatentUpdateToOneWithWhereWithoutFeesInput, PatentUpdateWithoutFeesInput>, PatentUncheckedUpdateWithoutFeesInput>
  }

  export type PatentCreateNestedOneWithoutEventsInput = {
    create?: XOR<PatentCreateWithoutEventsInput, PatentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PatentCreateOrConnectWithoutEventsInput
    connect?: PatentWhereUniqueInput
  }

  export type PatentUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<PatentCreateWithoutEventsInput, PatentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PatentCreateOrConnectWithoutEventsInput
    upsert?: PatentUpsertWithoutEventsInput
    connect?: PatentWhereUniqueInput
    update?: XOR<XOR<PatentUpdateToOneWithWhereWithoutEventsInput, PatentUpdateWithoutEventsInput>, PatentUncheckedUpdateWithoutEventsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PatentCreateWithoutCreatorInput = {
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PatentCategoryCreateNestedOneWithoutPatentsInput
    updater: UserCreateNestedOneWithoutUpdatedPatentsInput
    documents?: PatentDocumentCreateNestedManyWithoutPatentInput
    fees?: PatentFeeCreateNestedManyWithoutPatentInput
    events?: PatentEventCreateNestedManyWithoutPatentInput
  }

  export type PatentUncheckedCreateWithoutCreatorInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: number
    documents?: PatentDocumentUncheckedCreateNestedManyWithoutPatentInput
    fees?: PatentFeeUncheckedCreateNestedManyWithoutPatentInput
    events?: PatentEventUncheckedCreateNestedManyWithoutPatentInput
  }

  export type PatentCreateOrConnectWithoutCreatorInput = {
    where: PatentWhereUniqueInput
    create: XOR<PatentCreateWithoutCreatorInput, PatentUncheckedCreateWithoutCreatorInput>
  }

  export type PatentCreateManyCreatorInputEnvelope = {
    data: PatentCreateManyCreatorInput | PatentCreateManyCreatorInput[]
  }

  export type PatentCreateWithoutUpdaterInput = {
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PatentCategoryCreateNestedOneWithoutPatentsInput
    creator: UserCreateNestedOneWithoutCreatedPatentsInput
    documents?: PatentDocumentCreateNestedManyWithoutPatentInput
    fees?: PatentFeeCreateNestedManyWithoutPatentInput
    events?: PatentEventCreateNestedManyWithoutPatentInput
  }

  export type PatentUncheckedCreateWithoutUpdaterInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    documents?: PatentDocumentUncheckedCreateNestedManyWithoutPatentInput
    fees?: PatentFeeUncheckedCreateNestedManyWithoutPatentInput
    events?: PatentEventUncheckedCreateNestedManyWithoutPatentInput
  }

  export type PatentCreateOrConnectWithoutUpdaterInput = {
    where: PatentWhereUniqueInput
    create: XOR<PatentCreateWithoutUpdaterInput, PatentUncheckedCreateWithoutUpdaterInput>
  }

  export type PatentCreateManyUpdaterInputEnvelope = {
    data: PatentCreateManyUpdaterInput | PatentCreateManyUpdaterInput[]
  }

  export type PatentDocumentCreateWithoutUploaderInput = {
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
    patent: PatentCreateNestedOneWithoutDocumentsInput
  }

  export type PatentDocumentUncheckedCreateWithoutUploaderInput = {
    id?: number
    patentId: number
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type PatentDocumentCreateOrConnectWithoutUploaderInput = {
    where: PatentDocumentWhereUniqueInput
    create: XOR<PatentDocumentCreateWithoutUploaderInput, PatentDocumentUncheckedCreateWithoutUploaderInput>
  }

  export type PatentDocumentCreateManyUploaderInputEnvelope = {
    data: PatentDocumentCreateManyUploaderInput | PatentDocumentCreateManyUploaderInput[]
  }

  export type PatentUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PatentWhereUniqueInput
    update: XOR<PatentUpdateWithoutCreatorInput, PatentUncheckedUpdateWithoutCreatorInput>
    create: XOR<PatentCreateWithoutCreatorInput, PatentUncheckedCreateWithoutCreatorInput>
  }

  export type PatentUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PatentWhereUniqueInput
    data: XOR<PatentUpdateWithoutCreatorInput, PatentUncheckedUpdateWithoutCreatorInput>
  }

  export type PatentUpdateManyWithWhereWithoutCreatorInput = {
    where: PatentScalarWhereInput
    data: XOR<PatentUpdateManyMutationInput, PatentUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PatentScalarWhereInput = {
    AND?: PatentScalarWhereInput | PatentScalarWhereInput[]
    OR?: PatentScalarWhereInput[]
    NOT?: PatentScalarWhereInput | PatentScalarWhereInput[]
    id?: IntFilter<"Patent"> | number
    title?: StringFilter<"Patent"> | string
    description?: StringFilter<"Patent"> | string
    patentNumber?: StringFilter<"Patent"> | string
    applicationNumber?: StringFilter<"Patent"> | string
    applicationDate?: DateTimeFilter<"Patent"> | Date | string
    publicationDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    grantDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    status?: StringFilter<"Patent"> | string
    type?: StringFilter<"Patent"> | string
    categoryId?: IntFilter<"Patent"> | number
    priorityDate?: DateTimeNullableFilter<"Patent"> | Date | string | null
    priorityCountry?: StringNullableFilter<"Patent"> | string | null
    legalStatus?: StringFilter<"Patent"> | string
    abstract?: StringFilter<"Patent"> | string
    claims?: StringFilter<"Patent"> | string
    technicalField?: StringFilter<"Patent"> | string
    keywords?: StringFilter<"Patent"> | string
    applicants?: StringFilter<"Patent"> | string
    inventors?: StringFilter<"Patent"> | string
    createdAt?: DateTimeFilter<"Patent"> | Date | string
    updatedAt?: DateTimeFilter<"Patent"> | Date | string
    createdBy?: IntFilter<"Patent"> | number
    updatedBy?: IntFilter<"Patent"> | number
  }

  export type PatentUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: PatentWhereUniqueInput
    update: XOR<PatentUpdateWithoutUpdaterInput, PatentUncheckedUpdateWithoutUpdaterInput>
    create: XOR<PatentCreateWithoutUpdaterInput, PatentUncheckedCreateWithoutUpdaterInput>
  }

  export type PatentUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: PatentWhereUniqueInput
    data: XOR<PatentUpdateWithoutUpdaterInput, PatentUncheckedUpdateWithoutUpdaterInput>
  }

  export type PatentUpdateManyWithWhereWithoutUpdaterInput = {
    where: PatentScalarWhereInput
    data: XOR<PatentUpdateManyMutationInput, PatentUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type PatentDocumentUpsertWithWhereUniqueWithoutUploaderInput = {
    where: PatentDocumentWhereUniqueInput
    update: XOR<PatentDocumentUpdateWithoutUploaderInput, PatentDocumentUncheckedUpdateWithoutUploaderInput>
    create: XOR<PatentDocumentCreateWithoutUploaderInput, PatentDocumentUncheckedCreateWithoutUploaderInput>
  }

  export type PatentDocumentUpdateWithWhereUniqueWithoutUploaderInput = {
    where: PatentDocumentWhereUniqueInput
    data: XOR<PatentDocumentUpdateWithoutUploaderInput, PatentDocumentUncheckedUpdateWithoutUploaderInput>
  }

  export type PatentDocumentUpdateManyWithWhereWithoutUploaderInput = {
    where: PatentDocumentScalarWhereInput
    data: XOR<PatentDocumentUpdateManyMutationInput, PatentDocumentUncheckedUpdateManyWithoutUploaderInput>
  }

  export type PatentDocumentScalarWhereInput = {
    AND?: PatentDocumentScalarWhereInput | PatentDocumentScalarWhereInput[]
    OR?: PatentDocumentScalarWhereInput[]
    NOT?: PatentDocumentScalarWhereInput | PatentDocumentScalarWhereInput[]
    id?: IntFilter<"PatentDocument"> | number
    patentId?: IntFilter<"PatentDocument"> | number
    name?: StringFilter<"PatentDocument"> | string
    type?: StringFilter<"PatentDocument"> | string
    fileUrl?: StringFilter<"PatentDocument"> | string
    fileSize?: IntFilter<"PatentDocument"> | number
    uploadedAt?: DateTimeFilter<"PatentDocument"> | Date | string
    uploadedBy?: IntFilter<"PatentDocument"> | number
  }

  export type PatentCategoryCreateWithoutChildrenInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PatentCategoryCreateNestedOneWithoutChildrenInput
    patents?: PatentCreateNestedManyWithoutCategoryInput
  }

  export type PatentCategoryUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    description?: string | null
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patents?: PatentUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PatentCategoryCreateOrConnectWithoutChildrenInput = {
    where: PatentCategoryWhereUniqueInput
    create: XOR<PatentCategoryCreateWithoutChildrenInput, PatentCategoryUncheckedCreateWithoutChildrenInput>
  }

  export type PatentCategoryCreateWithoutParentInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PatentCategoryCreateNestedManyWithoutParentInput
    patents?: PatentCreateNestedManyWithoutCategoryInput
  }

  export type PatentCategoryUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PatentCategoryUncheckedCreateNestedManyWithoutParentInput
    patents?: PatentUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PatentCategoryCreateOrConnectWithoutParentInput = {
    where: PatentCategoryWhereUniqueInput
    create: XOR<PatentCategoryCreateWithoutParentInput, PatentCategoryUncheckedCreateWithoutParentInput>
  }

  export type PatentCategoryCreateManyParentInputEnvelope = {
    data: PatentCategoryCreateManyParentInput | PatentCategoryCreateManyParentInput[]
  }

  export type PatentCreateWithoutCategoryInput = {
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedPatentsInput
    updater: UserCreateNestedOneWithoutUpdatedPatentsInput
    documents?: PatentDocumentCreateNestedManyWithoutPatentInput
    fees?: PatentFeeCreateNestedManyWithoutPatentInput
    events?: PatentEventCreateNestedManyWithoutPatentInput
  }

  export type PatentUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    updatedBy: number
    documents?: PatentDocumentUncheckedCreateNestedManyWithoutPatentInput
    fees?: PatentFeeUncheckedCreateNestedManyWithoutPatentInput
    events?: PatentEventUncheckedCreateNestedManyWithoutPatentInput
  }

  export type PatentCreateOrConnectWithoutCategoryInput = {
    where: PatentWhereUniqueInput
    create: XOR<PatentCreateWithoutCategoryInput, PatentUncheckedCreateWithoutCategoryInput>
  }

  export type PatentCreateManyCategoryInputEnvelope = {
    data: PatentCreateManyCategoryInput | PatentCreateManyCategoryInput[]
  }

  export type PatentCategoryUpsertWithoutChildrenInput = {
    update: XOR<PatentCategoryUpdateWithoutChildrenInput, PatentCategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<PatentCategoryCreateWithoutChildrenInput, PatentCategoryUncheckedCreateWithoutChildrenInput>
    where?: PatentCategoryWhereInput
  }

  export type PatentCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: PatentCategoryWhereInput
    data: XOR<PatentCategoryUpdateWithoutChildrenInput, PatentCategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type PatentCategoryUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PatentCategoryUpdateOneWithoutChildrenNestedInput
    patents?: PatentUpdateManyWithoutCategoryNestedInput
  }

  export type PatentCategoryUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patents?: PatentUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PatentCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: PatentCategoryWhereUniqueInput
    update: XOR<PatentCategoryUpdateWithoutParentInput, PatentCategoryUncheckedUpdateWithoutParentInput>
    create: XOR<PatentCategoryCreateWithoutParentInput, PatentCategoryUncheckedCreateWithoutParentInput>
  }

  export type PatentCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: PatentCategoryWhereUniqueInput
    data: XOR<PatentCategoryUpdateWithoutParentInput, PatentCategoryUncheckedUpdateWithoutParentInput>
  }

  export type PatentCategoryUpdateManyWithWhereWithoutParentInput = {
    where: PatentCategoryScalarWhereInput
    data: XOR<PatentCategoryUpdateManyMutationInput, PatentCategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type PatentCategoryScalarWhereInput = {
    AND?: PatentCategoryScalarWhereInput | PatentCategoryScalarWhereInput[]
    OR?: PatentCategoryScalarWhereInput[]
    NOT?: PatentCategoryScalarWhereInput | PatentCategoryScalarWhereInput[]
    id?: IntFilter<"PatentCategory"> | number
    name?: StringFilter<"PatentCategory"> | string
    description?: StringNullableFilter<"PatentCategory"> | string | null
    parentId?: IntNullableFilter<"PatentCategory"> | number | null
    createdAt?: DateTimeFilter<"PatentCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PatentCategory"> | Date | string
  }

  export type PatentUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PatentWhereUniqueInput
    update: XOR<PatentUpdateWithoutCategoryInput, PatentUncheckedUpdateWithoutCategoryInput>
    create: XOR<PatentCreateWithoutCategoryInput, PatentUncheckedCreateWithoutCategoryInput>
  }

  export type PatentUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PatentWhereUniqueInput
    data: XOR<PatentUpdateWithoutCategoryInput, PatentUncheckedUpdateWithoutCategoryInput>
  }

  export type PatentUpdateManyWithWhereWithoutCategoryInput = {
    where: PatentScalarWhereInput
    data: XOR<PatentUpdateManyMutationInput, PatentUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PatentCategoryCreateWithoutPatentsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PatentCategoryCreateNestedOneWithoutChildrenInput
    children?: PatentCategoryCreateNestedManyWithoutParentInput
  }

  export type PatentCategoryUncheckedCreateWithoutPatentsInput = {
    id?: number
    name: string
    description?: string | null
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PatentCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type PatentCategoryCreateOrConnectWithoutPatentsInput = {
    where: PatentCategoryWhereUniqueInput
    create: XOR<PatentCategoryCreateWithoutPatentsInput, PatentCategoryUncheckedCreateWithoutPatentsInput>
  }

  export type UserCreateWithoutCreatedPatentsInput = {
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    updatedPatents?: PatentCreateNestedManyWithoutUpdaterInput
    uploadedDocuments?: PatentDocumentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutCreatedPatentsInput = {
    id?: number
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    updatedPatents?: PatentUncheckedCreateNestedManyWithoutUpdaterInput
    uploadedDocuments?: PatentDocumentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutCreatedPatentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedPatentsInput, UserUncheckedCreateWithoutCreatedPatentsInput>
  }

  export type UserCreateWithoutUpdatedPatentsInput = {
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    createdPatents?: PatentCreateNestedManyWithoutCreatorInput
    uploadedDocuments?: PatentDocumentCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutUpdatedPatentsInput = {
    id?: number
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    createdPatents?: PatentUncheckedCreateNestedManyWithoutCreatorInput
    uploadedDocuments?: PatentDocumentUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutUpdatedPatentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedPatentsInput, UserUncheckedCreateWithoutUpdatedPatentsInput>
  }

  export type PatentDocumentCreateWithoutPatentInput = {
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
    uploader: UserCreateNestedOneWithoutUploadedDocumentsInput
  }

  export type PatentDocumentUncheckedCreateWithoutPatentInput = {
    id?: number
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
    uploadedBy: number
  }

  export type PatentDocumentCreateOrConnectWithoutPatentInput = {
    where: PatentDocumentWhereUniqueInput
    create: XOR<PatentDocumentCreateWithoutPatentInput, PatentDocumentUncheckedCreateWithoutPatentInput>
  }

  export type PatentDocumentCreateManyPatentInputEnvelope = {
    data: PatentDocumentCreateManyPatentInput | PatentDocumentCreateManyPatentInput[]
  }

  export type PatentFeeCreateWithoutPatentInput = {
    type: string
    amount: number
    currency?: string
    dueDate: Date | string
    paidDate?: Date | string | null
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentFeeUncheckedCreateWithoutPatentInput = {
    id?: number
    type: string
    amount: number
    currency?: string
    dueDate: Date | string
    paidDate?: Date | string | null
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentFeeCreateOrConnectWithoutPatentInput = {
    where: PatentFeeWhereUniqueInput
    create: XOR<PatentFeeCreateWithoutPatentInput, PatentFeeUncheckedCreateWithoutPatentInput>
  }

  export type PatentFeeCreateManyPatentInputEnvelope = {
    data: PatentFeeCreateManyPatentInput | PatentFeeCreateManyPatentInput[]
  }

  export type PatentEventCreateWithoutPatentInput = {
    type: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentEventUncheckedCreateWithoutPatentInput = {
    id?: number
    type: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentEventCreateOrConnectWithoutPatentInput = {
    where: PatentEventWhereUniqueInput
    create: XOR<PatentEventCreateWithoutPatentInput, PatentEventUncheckedCreateWithoutPatentInput>
  }

  export type PatentEventCreateManyPatentInputEnvelope = {
    data: PatentEventCreateManyPatentInput | PatentEventCreateManyPatentInput[]
  }

  export type PatentCategoryUpsertWithoutPatentsInput = {
    update: XOR<PatentCategoryUpdateWithoutPatentsInput, PatentCategoryUncheckedUpdateWithoutPatentsInput>
    create: XOR<PatentCategoryCreateWithoutPatentsInput, PatentCategoryUncheckedCreateWithoutPatentsInput>
    where?: PatentCategoryWhereInput
  }

  export type PatentCategoryUpdateToOneWithWhereWithoutPatentsInput = {
    where?: PatentCategoryWhereInput
    data: XOR<PatentCategoryUpdateWithoutPatentsInput, PatentCategoryUncheckedUpdateWithoutPatentsInput>
  }

  export type PatentCategoryUpdateWithoutPatentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PatentCategoryUpdateOneWithoutChildrenNestedInput
    children?: PatentCategoryUpdateManyWithoutParentNestedInput
  }

  export type PatentCategoryUncheckedUpdateWithoutPatentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PatentCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutCreatedPatentsInput = {
    update: XOR<UserUpdateWithoutCreatedPatentsInput, UserUncheckedUpdateWithoutCreatedPatentsInput>
    create: XOR<UserCreateWithoutCreatedPatentsInput, UserUncheckedCreateWithoutCreatedPatentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedPatentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedPatentsInput, UserUncheckedUpdateWithoutCreatedPatentsInput>
  }

  export type UserUpdateWithoutCreatedPatentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedPatents?: PatentUpdateManyWithoutUpdaterNestedInput
    uploadedDocuments?: PatentDocumentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedPatentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedPatents?: PatentUncheckedUpdateManyWithoutUpdaterNestedInput
    uploadedDocuments?: PatentDocumentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type UserUpsertWithoutUpdatedPatentsInput = {
    update: XOR<UserUpdateWithoutUpdatedPatentsInput, UserUncheckedUpdateWithoutUpdatedPatentsInput>
    create: XOR<UserCreateWithoutUpdatedPatentsInput, UserUncheckedCreateWithoutUpdatedPatentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedPatentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedPatentsInput, UserUncheckedUpdateWithoutUpdatedPatentsInput>
  }

  export type UserUpdateWithoutUpdatedPatentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdPatents?: PatentUpdateManyWithoutCreatorNestedInput
    uploadedDocuments?: PatentDocumentUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedPatentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdPatents?: PatentUncheckedUpdateManyWithoutCreatorNestedInput
    uploadedDocuments?: PatentDocumentUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type PatentDocumentUpsertWithWhereUniqueWithoutPatentInput = {
    where: PatentDocumentWhereUniqueInput
    update: XOR<PatentDocumentUpdateWithoutPatentInput, PatentDocumentUncheckedUpdateWithoutPatentInput>
    create: XOR<PatentDocumentCreateWithoutPatentInput, PatentDocumentUncheckedCreateWithoutPatentInput>
  }

  export type PatentDocumentUpdateWithWhereUniqueWithoutPatentInput = {
    where: PatentDocumentWhereUniqueInput
    data: XOR<PatentDocumentUpdateWithoutPatentInput, PatentDocumentUncheckedUpdateWithoutPatentInput>
  }

  export type PatentDocumentUpdateManyWithWhereWithoutPatentInput = {
    where: PatentDocumentScalarWhereInput
    data: XOR<PatentDocumentUpdateManyMutationInput, PatentDocumentUncheckedUpdateManyWithoutPatentInput>
  }

  export type PatentFeeUpsertWithWhereUniqueWithoutPatentInput = {
    where: PatentFeeWhereUniqueInput
    update: XOR<PatentFeeUpdateWithoutPatentInput, PatentFeeUncheckedUpdateWithoutPatentInput>
    create: XOR<PatentFeeCreateWithoutPatentInput, PatentFeeUncheckedCreateWithoutPatentInput>
  }

  export type PatentFeeUpdateWithWhereUniqueWithoutPatentInput = {
    where: PatentFeeWhereUniqueInput
    data: XOR<PatentFeeUpdateWithoutPatentInput, PatentFeeUncheckedUpdateWithoutPatentInput>
  }

  export type PatentFeeUpdateManyWithWhereWithoutPatentInput = {
    where: PatentFeeScalarWhereInput
    data: XOR<PatentFeeUpdateManyMutationInput, PatentFeeUncheckedUpdateManyWithoutPatentInput>
  }

  export type PatentFeeScalarWhereInput = {
    AND?: PatentFeeScalarWhereInput | PatentFeeScalarWhereInput[]
    OR?: PatentFeeScalarWhereInput[]
    NOT?: PatentFeeScalarWhereInput | PatentFeeScalarWhereInput[]
    id?: IntFilter<"PatentFee"> | number
    patentId?: IntFilter<"PatentFee"> | number
    type?: StringFilter<"PatentFee"> | string
    amount?: FloatFilter<"PatentFee"> | number
    currency?: StringFilter<"PatentFee"> | string
    dueDate?: DateTimeFilter<"PatentFee"> | Date | string
    paidDate?: DateTimeNullableFilter<"PatentFee"> | Date | string | null
    status?: StringFilter<"PatentFee"> | string
    description?: StringNullableFilter<"PatentFee"> | string | null
    createdAt?: DateTimeFilter<"PatentFee"> | Date | string
    updatedAt?: DateTimeFilter<"PatentFee"> | Date | string
  }

  export type PatentEventUpsertWithWhereUniqueWithoutPatentInput = {
    where: PatentEventWhereUniqueInput
    update: XOR<PatentEventUpdateWithoutPatentInput, PatentEventUncheckedUpdateWithoutPatentInput>
    create: XOR<PatentEventCreateWithoutPatentInput, PatentEventUncheckedCreateWithoutPatentInput>
  }

  export type PatentEventUpdateWithWhereUniqueWithoutPatentInput = {
    where: PatentEventWhereUniqueInput
    data: XOR<PatentEventUpdateWithoutPatentInput, PatentEventUncheckedUpdateWithoutPatentInput>
  }

  export type PatentEventUpdateManyWithWhereWithoutPatentInput = {
    where: PatentEventScalarWhereInput
    data: XOR<PatentEventUpdateManyMutationInput, PatentEventUncheckedUpdateManyWithoutPatentInput>
  }

  export type PatentEventScalarWhereInput = {
    AND?: PatentEventScalarWhereInput | PatentEventScalarWhereInput[]
    OR?: PatentEventScalarWhereInput[]
    NOT?: PatentEventScalarWhereInput | PatentEventScalarWhereInput[]
    id?: IntFilter<"PatentEvent"> | number
    patentId?: IntFilter<"PatentEvent"> | number
    type?: StringFilter<"PatentEvent"> | string
    title?: StringFilter<"PatentEvent"> | string
    description?: StringFilter<"PatentEvent"> | string
    date?: DateTimeFilter<"PatentEvent"> | Date | string
    createdAt?: DateTimeFilter<"PatentEvent"> | Date | string
    updatedAt?: DateTimeFilter<"PatentEvent"> | Date | string
  }

  export type PatentCreateWithoutDocumentsInput = {
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PatentCategoryCreateNestedOneWithoutPatentsInput
    creator: UserCreateNestedOneWithoutCreatedPatentsInput
    updater: UserCreateNestedOneWithoutUpdatedPatentsInput
    fees?: PatentFeeCreateNestedManyWithoutPatentInput
    events?: PatentEventCreateNestedManyWithoutPatentInput
  }

  export type PatentUncheckedCreateWithoutDocumentsInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    updatedBy: number
    fees?: PatentFeeUncheckedCreateNestedManyWithoutPatentInput
    events?: PatentEventUncheckedCreateNestedManyWithoutPatentInput
  }

  export type PatentCreateOrConnectWithoutDocumentsInput = {
    where: PatentWhereUniqueInput
    create: XOR<PatentCreateWithoutDocumentsInput, PatentUncheckedCreateWithoutDocumentsInput>
  }

  export type UserCreateWithoutUploadedDocumentsInput = {
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    createdPatents?: PatentCreateNestedManyWithoutCreatorInput
    updatedPatents?: PatentCreateNestedManyWithoutUpdaterInput
  }

  export type UserUncheckedCreateWithoutUploadedDocumentsInput = {
    id?: number
    username: string
    email: string
    password: string
    realName: string
    phone?: string | null
    department?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    createdPatents?: PatentUncheckedCreateNestedManyWithoutCreatorInput
    updatedPatents?: PatentUncheckedCreateNestedManyWithoutUpdaterInput
  }

  export type UserCreateOrConnectWithoutUploadedDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedDocumentsInput, UserUncheckedCreateWithoutUploadedDocumentsInput>
  }

  export type PatentUpsertWithoutDocumentsInput = {
    update: XOR<PatentUpdateWithoutDocumentsInput, PatentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<PatentCreateWithoutDocumentsInput, PatentUncheckedCreateWithoutDocumentsInput>
    where?: PatentWhereInput
  }

  export type PatentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: PatentWhereInput
    data: XOR<PatentUpdateWithoutDocumentsInput, PatentUncheckedUpdateWithoutDocumentsInput>
  }

  export type PatentUpdateWithoutDocumentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PatentCategoryUpdateOneRequiredWithoutPatentsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedPatentsNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedPatentsNestedInput
    fees?: PatentFeeUpdateManyWithoutPatentNestedInput
    events?: PatentEventUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    fees?: PatentFeeUncheckedUpdateManyWithoutPatentNestedInput
    events?: PatentEventUncheckedUpdateManyWithoutPatentNestedInput
  }

  export type UserUpsertWithoutUploadedDocumentsInput = {
    update: XOR<UserUpdateWithoutUploadedDocumentsInput, UserUncheckedUpdateWithoutUploadedDocumentsInput>
    create: XOR<UserCreateWithoutUploadedDocumentsInput, UserUncheckedCreateWithoutUploadedDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedDocumentsInput, UserUncheckedUpdateWithoutUploadedDocumentsInput>
  }

  export type UserUpdateWithoutUploadedDocumentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdPatents?: PatentUpdateManyWithoutCreatorNestedInput
    updatedPatents?: PatentUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdPatents?: PatentUncheckedUpdateManyWithoutCreatorNestedInput
    updatedPatents?: PatentUncheckedUpdateManyWithoutUpdaterNestedInput
  }

  export type PatentCreateWithoutFeesInput = {
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PatentCategoryCreateNestedOneWithoutPatentsInput
    creator: UserCreateNestedOneWithoutCreatedPatentsInput
    updater: UserCreateNestedOneWithoutUpdatedPatentsInput
    documents?: PatentDocumentCreateNestedManyWithoutPatentInput
    events?: PatentEventCreateNestedManyWithoutPatentInput
  }

  export type PatentUncheckedCreateWithoutFeesInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    updatedBy: number
    documents?: PatentDocumentUncheckedCreateNestedManyWithoutPatentInput
    events?: PatentEventUncheckedCreateNestedManyWithoutPatentInput
  }

  export type PatentCreateOrConnectWithoutFeesInput = {
    where: PatentWhereUniqueInput
    create: XOR<PatentCreateWithoutFeesInput, PatentUncheckedCreateWithoutFeesInput>
  }

  export type PatentUpsertWithoutFeesInput = {
    update: XOR<PatentUpdateWithoutFeesInput, PatentUncheckedUpdateWithoutFeesInput>
    create: XOR<PatentCreateWithoutFeesInput, PatentUncheckedCreateWithoutFeesInput>
    where?: PatentWhereInput
  }

  export type PatentUpdateToOneWithWhereWithoutFeesInput = {
    where?: PatentWhereInput
    data: XOR<PatentUpdateWithoutFeesInput, PatentUncheckedUpdateWithoutFeesInput>
  }

  export type PatentUpdateWithoutFeesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PatentCategoryUpdateOneRequiredWithoutPatentsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedPatentsNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedPatentsNestedInput
    documents?: PatentDocumentUpdateManyWithoutPatentNestedInput
    events?: PatentEventUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateWithoutFeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    documents?: PatentDocumentUncheckedUpdateManyWithoutPatentNestedInput
    events?: PatentEventUncheckedUpdateManyWithoutPatentNestedInput
  }

  export type PatentCreateWithoutEventsInput = {
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PatentCategoryCreateNestedOneWithoutPatentsInput
    creator: UserCreateNestedOneWithoutCreatedPatentsInput
    updater: UserCreateNestedOneWithoutUpdatedPatentsInput
    documents?: PatentDocumentCreateNestedManyWithoutPatentInput
    fees?: PatentFeeCreateNestedManyWithoutPatentInput
  }

  export type PatentUncheckedCreateWithoutEventsInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    updatedBy: number
    documents?: PatentDocumentUncheckedCreateNestedManyWithoutPatentInput
    fees?: PatentFeeUncheckedCreateNestedManyWithoutPatentInput
  }

  export type PatentCreateOrConnectWithoutEventsInput = {
    where: PatentWhereUniqueInput
    create: XOR<PatentCreateWithoutEventsInput, PatentUncheckedCreateWithoutEventsInput>
  }

  export type PatentUpsertWithoutEventsInput = {
    update: XOR<PatentUpdateWithoutEventsInput, PatentUncheckedUpdateWithoutEventsInput>
    create: XOR<PatentCreateWithoutEventsInput, PatentUncheckedCreateWithoutEventsInput>
    where?: PatentWhereInput
  }

  export type PatentUpdateToOneWithWhereWithoutEventsInput = {
    where?: PatentWhereInput
    data: XOR<PatentUpdateWithoutEventsInput, PatentUncheckedUpdateWithoutEventsInput>
  }

  export type PatentUpdateWithoutEventsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PatentCategoryUpdateOneRequiredWithoutPatentsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedPatentsNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedPatentsNestedInput
    documents?: PatentDocumentUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    documents?: PatentDocumentUncheckedUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUncheckedUpdateManyWithoutPatentNestedInput
  }

  export type PatentCreateManyCreatorInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: number
  }

  export type PatentCreateManyUpdaterInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    categoryId: number
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
  }

  export type PatentDocumentCreateManyUploaderInput = {
    id?: number
    patentId: number
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type PatentUpdateWithoutCreatorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PatentCategoryUpdateOneRequiredWithoutPatentsNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedPatentsNestedInput
    documents?: PatentDocumentUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUpdateManyWithoutPatentNestedInput
    events?: PatentEventUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    documents?: PatentDocumentUncheckedUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUncheckedUpdateManyWithoutPatentNestedInput
    events?: PatentEventUncheckedUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PatentUpdateWithoutUpdaterInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PatentCategoryUpdateOneRequiredWithoutPatentsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedPatentsNestedInput
    documents?: PatentDocumentUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUpdateManyWithoutPatentNestedInput
    events?: PatentEventUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateWithoutUpdaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    documents?: PatentDocumentUncheckedUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUncheckedUpdateManyWithoutPatentNestedInput
    events?: PatentEventUncheckedUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateManyWithoutUpdaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
  }

  export type PatentDocumentUpdateWithoutUploaderInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patent?: PatentUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type PatentDocumentUncheckedUpdateWithoutUploaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    patentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentDocumentUncheckedUpdateManyWithoutUploaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    patentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentCategoryCreateManyParentInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentCreateManyCategoryInput = {
    id?: number
    title: string
    description: string
    patentNumber: string
    applicationNumber: string
    applicationDate: Date | string
    publicationDate?: Date | string | null
    grantDate?: Date | string | null
    expirationDate?: Date | string | null
    status?: string
    type: string
    priorityDate?: Date | string | null
    priorityCountry?: string | null
    legalStatus: string
    abstract: string
    claims: string
    technicalField: string
    keywords: string
    applicants: string
    inventors: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    updatedBy: number
  }

  export type PatentCategoryUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PatentCategoryUpdateManyWithoutParentNestedInput
    patents?: PatentUpdateManyWithoutCategoryNestedInput
  }

  export type PatentCategoryUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PatentCategoryUncheckedUpdateManyWithoutParentNestedInput
    patents?: PatentUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PatentCategoryUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedPatentsNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedPatentsNestedInput
    documents?: PatentDocumentUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUpdateManyWithoutPatentNestedInput
    events?: PatentEventUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
    documents?: PatentDocumentUncheckedUpdateManyWithoutPatentNestedInput
    fees?: PatentFeeUncheckedUpdateManyWithoutPatentNestedInput
    events?: PatentEventUncheckedUpdateManyWithoutPatentNestedInput
  }

  export type PatentUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    patentNumber?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    publicationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priorityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priorityCountry?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    claims?: StringFieldUpdateOperationsInput | string
    technicalField?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    applicants?: StringFieldUpdateOperationsInput | string
    inventors?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PatentDocumentCreateManyPatentInput = {
    id?: number
    name: string
    type: string
    fileUrl: string
    fileSize: number
    uploadedAt?: Date | string
    uploadedBy: number
  }

  export type PatentFeeCreateManyPatentInput = {
    id?: number
    type: string
    amount: number
    currency?: string
    dueDate: Date | string
    paidDate?: Date | string | null
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentEventCreateManyPatentInput = {
    id?: number
    type: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatentDocumentUpdateWithoutPatentInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput
  }

  export type PatentDocumentUncheckedUpdateWithoutPatentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PatentDocumentUncheckedUpdateManyWithoutPatentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PatentFeeUpdateWithoutPatentInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentFeeUncheckedUpdateWithoutPatentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentFeeUncheckedUpdateManyWithoutPatentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentEventUpdateWithoutPatentInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentEventUncheckedUpdateWithoutPatentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatentEventUncheckedUpdateManyWithoutPatentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatentCategoryCountOutputTypeDefaultArgs instead
     */
    export type PatentCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatentCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatentCountOutputTypeDefaultArgs instead
     */
    export type PatentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatentCategoryDefaultArgs instead
     */
    export type PatentCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatentCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatentDefaultArgs instead
     */
    export type PatentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatentDocumentDefaultArgs instead
     */
    export type PatentDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatentDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatentFeeDefaultArgs instead
     */
    export type PatentFeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatentFeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatentEventDefaultArgs instead
     */
    export type PatentEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatentEventDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}