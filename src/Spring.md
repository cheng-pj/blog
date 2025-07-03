# Spring 通用jar包

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
		 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.cheng</groupId>
	<artifactId>maven_parent</artifactId>
	<version>1.0-SNAPSHOT</version>

	<packaging>pom</packaging>

	<!--子模块-->
	<modules>
		<module>../maven_manager</module>
		<module>../maven_redis</module>
		<module>../maven_rest</module>
		<module>../maven_search</module>
		<module>../maven_sso</module>
		<module>../maven_common</module>
	</modules>

	<!--集中定义依赖版本号-->
	<properties>
		<junit.version>4.12</junit.version>
		<maven-resources-plugin>3.1.0</maven-resources-plugin>
		<maven-compiler-plugin>3.8.0</maven-compiler-plugin>
		<mybatis.version>3.4.6</mybatis.version>
		<mybatis-spring.version>1.3.2</mybatis-spring.version>
		<spring.version>5.1.2.RELEASE</spring.version>
		<!--<druid.version>1.1.12</druid.version>-->
		<c3p0.version>0.9.5</c3p0.version>
		<mysql.version>5.1.47</mysql.version>
		<jstl.version>1.2</jstl.version>
		<standard.verrsion>1.1.2</standard.verrsion>
	</properties>

	<!--依赖定义-->
	<dependencyManagement>
		<!--集中定义框架 jar包-->
		<dependencies>
			<dependency>
				<groupId>junit</groupId>
				<artifactId>junit</artifactId>
				<version>${junit.version}</version>
			</dependency>



			<!-- 依赖到 service -->
			<!-- spring-context -->
			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-context</artifactId>
				<version>${spring.version}</version>
			</dependency>
			<!-- spring-jdbc -->
			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-jdbc</artifactId>
				<version>${spring.version}</version>
			</dependency>
			<!-- spring-aspects -->
			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-aspects</artifactId>
				<version>${spring.version}</version>
			</dependency>
			<!-- spring-webmvc -->
			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-webmvc</artifactId>
				<version>${spring.version}</version>
			</dependency>
			<!-- spring-beans -->
			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-beans</artifactId>
				<version>${spring.version}</version>
			</dependency>


			<!-- 有关数据库的依赖到 mapper -->
			<!-- 连接池 -->
			<!--<dependency>
				<groupId>com.alibaba</groupId>
				<artifactId>druid</artifactId>
				<version>${druid.version}</version>
			</dependency>-->

			<dependency>
				<groupId>com.mchange</groupId>
				<artifactId>c3p0</artifactId>
				<version>${c3p0.version}</version>
			</dependency>

			<!-- mybatis -->
			<dependency>
				<groupId>org.mybatis</groupId>
				<artifactId>mybatis</artifactId>
				<version>${mybatis.version}</version>
			</dependency>
			<!-- mybatis-spring -->
			<dependency>
				<groupId>org.mybatis</groupId>
				<artifactId>mybatis-spring</artifactId>
				<version>${mybatis-spring.version}</version>
			</dependency>
			<!-- mysql -->
			<dependency>
				<groupId>mysql</groupId>
				<artifactId>mysql-connector-java</artifactId>
				<version>${mysql.version}</version>
			</dependency>

			<!-- jsp页面 -->
			<!-- jstl -->
			<dependency>
				<groupId>javax.servlet</groupId>
				<artifactId>jstl</artifactId>
				<version>${jstl.version}</version>
			</dependency>
			<dependency>
				<groupId>taglibs</groupId>
				<artifactId>standard</artifactId>
				<version>${standard.verrsion}</version>
			</dependency>
		</dependencies>
	</dependencyManagement>

	<!--构建-->
	<build>
		<resources>
			<resource>
				<directory>src/main/java</directory>
				<includes>
					<include>**/*.xml</include>
				</includes>
			</resource>
			<resource>
				<directory>src/main/resources</directory>
				<includes>
					<include>**/*.xml</include>
					<include>**/*.properties</include>
				</includes>
			</resource>
		</resources>
		<!--定义插件-->
		<plugins>
			<plugin>
				<!--定义一个资源拷贝的插件-->
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-resources-plugin</artifactId>
				<version>${maven-resources-plugin}</version>
				<configuration>
					<encoding>UTF-8</encoding>
				</configuration>
			</plugin>

			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>${maven-compiler-plugin}</version>
				<configuration>
					<compilerVersion>1.8</compilerVersion>
					<source>1.8</source>
					<target>1.8</target>
					<encoding>UTF-8</encoding>
				</configuration>
			</plugin>
		</plugins>
	</build>
</project>
```

# 注解

## @controller 控制器（注入服务）

## @RestController

## @Service 服务层

## @Resource 和 @Autowired 之间的区别

> 两者作用相同

### 1、相同点

@Resource的作用相当于@Autowired，均可标注在字段或者属性的setter方法上。

### 2、不同点

- @Autowired默认按类型装配（这个注解是属业spring的），默认情况下必须要求依赖对象必须存在，如果要允许null值，可以设置它的required属性为false，如@Autowired(required=false) ，如果我们想使用名称装配可以结合@Qualifier注解进行使用，如下：

```java
@Autowired() @Qualifier("baseDao")    
private BaseDao baseDao;
```

- @Autowired实现：

	- 注解驱动配置会向spring容器中注册AutowiredAnnotationBeanPostProcessor
	- 当 Spring 容器启动时，AutowiredAnnotationBeanPostProcessor 将扫描 Spring 容器中所有 Bean，当发现 Bean 中拥有 @Autowired 注释时就找到和其匹配（默认按类型匹配）的 Bean，并注入到对应的地方中去。

- @Resource 是JDK1.6支持的注解，默认按照名称进行装配，名称可以通过name属性进行指定。也提供按照byType 注入。

	- 如果没有指定name属性，当注解写在字段上时，默认取字段名，按照名称查找。
	- 当注解标注在属性的setter方法上，即默认取属性名作为bean名称寻找依赖对象。
	- 当找不到与名称匹配的bean时才按照类型进行装配。但是需要注意的是，如果name属性一旦指定，就只会按照名称进行装配。

- @Resource装配顺序

	　　1. 如果同时指定了name和type，则从Spring上下文中找到唯一匹配的bean进行装配，找不到则抛出异常
	
	　　2. 如果指定了name，则从上下文中查找名称（id）匹配的bean进行装配，找不到则抛出异常
	
	　　3. 如果指定了type，则从上下文中找到类型匹配的唯一bean进行装配，找不到或者找到多个，都会抛出异常
	
	　　4. 如果既没有指定name，又没有指定type，则自动按照byName方式进行装配；如果没有匹配，则回退为一个原始类型进行匹配，如果匹配则自动装配；

**他们的主要区别就是@Autowired是默认按照类型装配的 @Resource默认是按照名称装配的**

- byName 通过参数名 自动装配，如果一个bean的name 和另外一个bean的 property 相同，就自动装配。
- byType 通过参数的数据类型自动自动装配，如果一个bean的数据类型和另外一个bean的property属性的数据类型兼容，就自动装配

在基于主机方式配置Spring的配置文件中，你可能会见到**<context:annotation-config/>**
 这样一条配置，他的作用是式地向 Spring 容器注册

- AutowiredAnnotationBeanPostProcessor
- CommonAnnotationBeanPostProcessor
- PersistenceAnnotationBeanPostProcessor
- RequiredAnnotationBeanPostProcessor

这 4 个BeanPostProcessor。注册这4个BeanPostProcessor的作用，就是为了你的系统能够识别相应的注解。

## @Component



# CORS 跨域

## Java 配置

> 要在MVC Java配置中启用CORS，可以使用`CorsRegistry`回调，如以下示例所示：

```java
@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/api/**")
            .allowedOrigins("https://domain2.com")
            .allowedMethods("PUT", "DELETE")
            .allowedHeaders("header1", "header2", "header3")
            .exposedHeaders("header1", "header2")
            .allowCredentials(true).maxAge(3600);

        // Add more mappings...
    }
}
```

## XML 配置

> 要在XML名称空间中启用CORS，可以使用`<mvc:cors>`元素，如以下示例所示：

```xml
<mvc:cors>
    <mvc:mapping path="/api/**"
                 allowed-origins="https://domain1.com, https://domain2.com"
                 allowed-methods="GET, PUT"
                 allowed-headers="header1, header2, header3"
                 exposed-headers="header1, header2" allow-credentials="true"
                 max-age="123" />

    <mvc:mapping path="/resources/**" allowed-origins="https://domain1.com" />
</mvc:cors>
```

## SpringMVC 3 支持跨域

>  SpringMVC 3不支持以上方法，通过Filter的方式实现。

```java
@Component
public class SimpleCORSFilter implements Filter {

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with");
        chain.doFilter(req, res);
    }

    public void init(FilterConfig filterConfig) {}
    public void destroy() {}
}
```

> `web.xml`里配置

```xml
<filter>
    <filter-name>cors</filter-name>
    <filter-class>test.cors.SimpleCORSFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>cors</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

#  资源管理 maven 项目模块结构

```
-- movie-system
	-- movie-common		--jar
	-- movie-model		--jar
		-- com.mc.pojo
	-- movie-admin		--war
		-- com.mc.admin.mapper
		-- com.mc.admin.service
		-- com.mc.admin.controller
	-- movie-web		--war
		-- com.mc.mapper
		-- com.mc.web.service
		-- com.mc.web.controller
-- pom.xml
```



# mybatis XML 映射文件



## select

## insert, update 和 delete

> 数据变更语句 insert，update 和 delete 的实现非常接近：

```xml
<insert
  id="insertAuthor"
  parameterType="domain.blog.Author"
  flushCache="true"
  statementType="PREPARED"
  keyProperty=""
  keyColumn=""
  useGeneratedKeys=""
  timeout="20">

<update
  id="updateAuthor"
  parameterType="domain.blog.Author"
  flushCache="true"
  statementType="PREPARED"
  timeout="20">

<delete
  id="deleteAuthor"
  parameterType="domain.blog.Author"
  flushCache="true"
  statementType="PREPARED"
  timeout="20">
```

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| `id`               | 命名空间中的唯一标识符，可被用来代表这条语句。               |
| `parameterType`    | 将要传入语句的参数的完全限定类名或别名。这个属性是可选的，因为 MyBatis 可以通过类型处理器推断出具体传入语句的参数，默认值为未设置（unset）。 |
| `parameterMap`     | 这是引用外部 parameterMap 的已经被废弃的方法。请使用内联参数映射和 parameterType 属性。 |
| `flushCache`       | 将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：true（对于 insert、update 和 delete 语句）。 |
| `timeout`          | 这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为未设置（unset）（依赖驱动）。 |
| `statementType`    | STATEMENT，PREPARED 或 CALLABLE 的一个。这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED。 |
| `useGeneratedKeys` | （仅对 insert 和 update 有用）这会令 MyBatis 使用 JDBC 的 getGeneratedKeys 方法来取出由数据库内部生成的主键（比如：像 MySQL 和 SQL Server 这样的关系数据库管理系统的自动递增字段），默认值：false。 |
| `keyProperty`      | （仅对 insert 和 update 有用）唯一标记一个属性，MyBatis 会通过 getGeneratedKeys 的返回值或者通过 insert 语句的 selectKey 子元素设置它的键值，默认值：未设置（`unset`）。如果希望得到多个生成的列，也可以是逗号分隔的属性名称列表。 |
| `keyColumn`        | （仅对 insert 和 update 有用）通过生成的键值设置表中的列名，这个设置仅在某些数据库（像 PostgreSQL）是必须的，当主键列不是表中的第一列的时候需要设置。如果希望使用多个生成的列，也可以设置为逗号分隔的属性名称列表。 |
| `databaseId`       | 如果配置了数据库厂商标识（databaseIdProvider），MyBatis 会加载所有的不带 databaseId 或匹配当前 databaseId 的语句；如果带或者不带的语句都有，则不带的会被忽略。 |

下面就是 insert，update 和 delete 语句的示例：

```xml
<insert id="insertAuthor">
  insert into Author (id,username,password,email,bio)
  values (#{id},#{username},#{password},#{email},#{bio})
</insert>

<update id="updateAuthor">
  update Author set
    username = #{username},
    password = #{password},
    email = #{email},
    bio = #{bio}
  where id = #{id}
</update>

<delete id="deleteAuthor">
  delete from Author where id = #{id}
</delete>
```

如前所述，插入语句的配置规则更加丰富，在插入语句里面有一些额外的属性和子元素用来处理主键的生成，而且有多种生成方式。

首先，如果你的数据库支持自动生成主键的字段（比如 MySQL 和 SQL Server），那么你可以设置 useGeneratedKeys=”true”，然后再把 keyProperty 设置到目标属性上就 OK 了。例如，如果上面的 Author 表已经对 id 使用了自动生成的列类型，那么语句可以修改为：

```xml
<insert id="insertAuthor" useGeneratedKeys="true"
    keyProperty="id">
  insert into Author (username,password,email,bio)
  values (#{username},#{password},#{email},#{bio})
</insert>
```

如果你的数据库还支持多行插入, 你也可以传入一个 `Author` 数组或集合，并返回自动生成的主键。

```xml
<insert id="insertAuthor" useGeneratedKeys="true"
    keyProperty="id">
  insert into Author (username, password, email, bio) values
  <foreach item="item" collection="list" separator=",">
    (#{item.username}, #{item.password}, #{item.email}, #{item.bio})
  </foreach>
</insert>
```

对于不支持自动生成类型的数据库或可能不支持自动生成主键的 JDBC 驱动，MyBatis 有另外一种方法来生成主键。

这里有一个简单（甚至很傻）的示例，它可以生成一个随机 ID（你最好不要这么做，但这里展示了 MyBatis 处理问题的灵活性及其所关心的广度）：

```xml
<insert id="insertAuthor">
  <selectKey keyProperty="id" resultType="int" order="BEFORE">
    select CAST(RANDOM()*1000000 as INTEGER) a from SYSIBM.SYSDUMMY1
  </selectKey>
  insert into Author
    (id, username, password, email,bio, favourite_section)
  values
    (#{id}, #{username}, #{password}, #{email}, #{bio}, #{favouriteSection,jdbcType=VARCHAR})
</insert>
```

在上面的示例中，selectKey 元素中的语句将会首先运行，Author 的 id 会被设置，然后插入语句会被调用。这可以提供给你一个与数据库中自动生成主键类似的行为，同时保持了 Java 代码的简洁。

selectKey 元素描述如下：

```xml
<selectKey
  keyProperty="id"
  resultType="int"
  order="BEFORE"
  statementType="PREPARED">
```

| 属性            | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| `keyProperty`   | selectKey 语句结果应该被设置的目标属性。如果希望得到多个生成的列，也可以是逗号分隔的属性名称列表。 |
| `keyColumn`     | 匹配属性的返回结果集中的列名称。如果希望得到多个生成的列，也可以是逗号分隔的属性名称列表。 |
| `resultType`    | 结果的类型。MyBatis 通常可以推断出来，但是为了更加精确，写上也不会有什么问题。MyBatis 允许将任何简单类型用作主键的类型，包括字符串。如果希望作用于多个生成的列，则可以使用一个包含期望属性的 Object 或一个 Map。 |
| `order`         | 这可以被设置为 BEFORE 或 AFTER。如果设置为 BEFORE，那么它会首先生成主键，设置 keyProperty 然后执行插入语句。如果设置为 AFTER，那么先执行插入语句，然后是 selectKey 中的语句 - 这和 Oracle 数据库的行为相似，在插入语句内部可能有嵌入索引调用。 |
| `statementType` | 与前面相同，MyBatis 支持 STATEMENT，PREPARED 和 CALLABLE 语句的映射类型，分别代表 PreparedStatement 和 CallableStatement 类型。 |



# controller

## 1、请求映射

您可以使用`@RequestMapping`批注将请求映射到控制器方法。它具有各种属性，可以通过URL，HTTP方法，请求参数，标头和媒体类型进行匹配。您可以在类级别使用它来表示共享的映射，也可以在方法级别使用它来缩小到特定的端点映射。

还有HTTP方法特定的快捷方式变体`@RequestMapping`：

- `@GetMapping`
- `@PostMapping`
- `@PutMapping`
- `@DeleteMapping`
- `@PatchMapping`

快捷方式是提供的“ [自定义注释”](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestmapping-composed)，因为可以说，大多数控制器方法应映射到特定的HTTP方法，而不是使用using `@RequestMapping`（默认情况下，它与所有HTTP方法匹配）。同时，`@RequestMapping`在类级别仍需要a 来表示共享映射。

以下示例具有类型和方法级别的映射：

爪哇

科特林

```java
@RestController
@RequestMapping("/persons")
class PersonController {

    @GetMapping("/{id}")
    public Person getPerson(@PathVariable Long id) {
        // ...
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void add(@RequestBody Person person) {
        // ...
    }
}
```

### URI模式

您可以使用以下全局模式和通配符来映射请求：

- `?` 匹配一个字符
- `*` 匹配路径段中的零个或多个字符
- `**` 匹配零个或多个路径段

您还可以声明URI变量并使用来访问其值`@PathVariable`，如以下示例所示：

```java
@GetMapping("/owners/{ownerId}/pets/{petId}")
public Pet findPet(@PathVariable Long ownerId, @PathVariable Long petId) {
    // ...
}
```

您可以在类和方法级别声明URI变量，如以下示例所示：

```java
@Controller
@RequestMapping("/owners/{ownerId}")
public class OwnerController {

    @GetMapping("/pets/{petId}")
    public Pet findPet(@PathVariable Long ownerId, @PathVariable Long petId) {
        // ...
    }
}
```

URI变量会自动转换为适当的类型，或者`TypeMismatchException` 引发。简单类型（`int`，`long`，`Date`，等）默认支持，你可以注册任何其它数据类型的支持。请参阅[类型转换](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-typeconversion)和[`DataBinder`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-initbinder)。

您可以显式命名URI变量（例如`@PathVariable("customId")`），但是如果名称相同并且您的代码是通过调试信息或`-parameters`Java 8上的编译器标志进行编译的，则可以省去该细节。

语法`{varName:regex}`使用正则表达式声明语法为的URI变量`{varName:regex}`。例如，给定URL `"/spring-web-3.0.5 .jar"`，以下方法提取名称，版本和文件扩展名：

```java
@GetMapping("/{name:[a-z-]+}-{version:\\d\\.\\d\\.\\d}{ext:\\.[a-z]+}")
public void handle(@PathVariable String version, @PathVariable String ext) {
    // ...
}
```

URI路径模式还可以具有嵌入式`${…}`占位符，这些占位符在启动时可以通过`PropertyPlaceHolderConfigurer`针对本地，系统，环境和其他属性源进行解析。例如，您可以使用它来基于一些外部配置参数化基本URL。

Spring MVC使用`PathMatcher`合同和`AntPathMatcher`from 的实现 `spring-core`进行URI路径匹配。

### 模式比较

当多个模式与URL匹配时，必须将它们进行比较以找到最佳匹配。这是通过使用来完成的`AntPathMatcher.getPatternComparator(String path)`，该工具查找更具体的模式。

如果模式的URI变量（计数为1），单通配符（计数为1）和双通配符（计数为2）的数量较少，则模式的含义不太明确。给定相等的分数，则选择更长的模式。给定相同的分数和长度，将选择具有比通配符更多URI变量的模式。

默认映射模式（`/**`）从评分中排除，并且始终排在最后。另外，前缀模式（例如`/public/**`）被认为比没有双通配符的其他模式更不具体。

有关完整的详细信息，请参见[`AntPatternComparator`](https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/javadoc-api/org/springframework/util/AntPathMatcher.AntPatternComparator.html) 中[`AntPathMatcher`](https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/javadoc-api/org/springframework/util/AntPathMatcher.html)，也请记住，你可以自定义[`PathMatcher`](https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/javadoc-api/org/springframework/util/PathMatcher.html)的实现。请参阅配置部分中的[路径匹配](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config-path-matching)。

### 后缀匹配

默认情况下，Spring MVC执行`.*`后缀模式匹配，因此映射到的控制器`/person`也隐式映射到`/person.*`。然后，将文件的扩展名是用于解释所请求的内容类型来使用该响应（即，代替`Accept`标题） -例如，`/person.pdf`， `/person.xml`，和其他。

当浏览器用于发送`Accept`难以一致解释的标头时，以这种方式使用文件扩展名是必要的。目前，这已不再是必须的，使用`Accept`标头应该是首选。

随着时间的流逝，文件扩展名的使用已经以各种方式证明是有问题的。当使用URI变量，路径参数和URI编码进行覆盖时，可能会引起歧义。关于基于URL的授权和安全性的推理（请参阅下一部分以了解更多详细信息）也变得更加困难。

若要完全禁用文件扩展名，必须设置以下两项：

- `useSuffixPatternMatching(false)`，请参阅[PathMatchConfigurer](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config-path-matching)
- `favorPathExtension(false)`，请参阅[ContentNegotiationConfigurer](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config-content-negotiation)

基于URL的内容协商仍然有用（例如，在浏览器中键入URL时）。为此，我们建议使用基于查询参数的策略，以避免文件扩展名附带的大多数问题。另外，如果必须使用文件扩展名，请考虑通过[ContentNegotiationConfigurer](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config-content-negotiation)的`mediaTypes`属性将它们限制为显式注册的扩展名列表 。

### 后缀匹配和RFD

反射文件下载（RFD）攻击与XSS相似，它依赖于响应中反映的请求输入（例如，查询参数和URI变量）。但是，RFD攻击不是将JavaScript插入HTML，而是依靠浏览器切换来执行下载，并在以后双击时将响应视为可执行脚本。

在Spring MVC中，`@ResponseBody`和`ResponseEntity`方法是有风险的，因为它们可以呈现不同的内容类型，客户端可以通过URL路径扩展要求。禁用后缀模式匹配并使用路径扩展进行内容协商可以降低风险，但不足以防止RFD攻击。

为了防止RFD攻击，Spring MVC在呈现响应主体之前添加了 `Content-Disposition:inline;filename=f.txt`标头，以建议固定和安全的下载文件。仅当URL路径包含既未列入白名单也未明确注册用于内容协商的文件扩展名时，才执行此操作。但是，当直接在浏览器中键入URL时，它可能会产生副作用。

默认情况下，许多常见的路径扩展名都被列入白名单。具有自定义`HttpMessageConverter`实现的应用程序 可以显式注册文件扩展名以进行内容协商，以避免`Content-Disposition`为这些扩展名添加头。请参阅[内容类型](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config-content-negotiation)。

有关RFD的其他建议，请参见[CVE-2015-5211](https://pivotal.io/security/cve-2015-5211)。

### 消耗媒体类型

您可以根据请求的来缩小请求映射`Content-Type`，如以下示例所示：

```java
@PostMapping(path = "/pets", consumes = "application/json") 
public void addPet(@RequestBody Pet pet) {
    // ...
}
```

使用`consumes`属性按内容类型缩小映射。

该`consumes`属性还支持否定表达式-例如，`!text/plain`表示以外的任何内容类型`text/plain`。

您可以`consumes`在类级别声明共享属性。但是，与大多数其他请求映射属性不同，在类级使用时，方法级`consumes`属性将覆盖而不是扩展类级声明。

`MediaType`提供常用媒体类型（例如`APPLICATION_JSON_VALUE`和）的常量 `APPLICATION_XML_VALUE`。

### 可生产的媒体类型

您可以根据`Accept`请求标头和控制器方法生成的内容类型列表来缩小请求映射，如以下示例所示：

```java
@GetMapping(path = "/pets/{petId}", produces = "application/json") 
@ResponseBody
public Pet getPet(@PathVariable String petId) {
    // ...
}
```
使用`produces`属性按内容类型缩小映射。

媒体类型可以指定字符集。支持否定表达式-例如， `!text/plain`表示除“文本/纯文本”之外的任何内容类型。

您可以`produces`在类级别声明共享属性。但是，与大多数其他请求映射属性不同，在类级使用时，方法级`produces`属性将覆盖而不是扩展类级声明。

`MediaType`提供常用媒体类型（例如`APPLICATION_JSON_VALUE`和）的常量 `APPLICATION_XML_VALUE`。

### 参数，标题

您可以根据请求参数条件来缩小请求映射。您可以测试是否存在请求参数（`myParam`），是否存在请求参数（）`!myParam`或特定值（`myParam=myValue`）。以下示例显示如何测试特定值：

```java
@GetMapping(path = "/pets/{petId}", params = "myParam=myValue") 
public void findPet(@PathVariable String petId) {
    // ...
}
```

测试是否`myParam`相等`myValue`。

您还可以将其与请求标头条件一起使用，如以下示例所示：

```java
@GetMapping(path = "/pets", headers = "myHeader=myValue") 
public void findPet(@PathVariable String petId) {
    // ...
}
```

测试是否`myHeader`相等`myValue`。

您可以匹配* `Content-Type` 并  `Accept`** 与标头条件匹配，但是最好改用*消耗和生产 。

### HTTP HEAD，选项

`@GetMapping`（和`@RequestMapping(method=HttpMethod.GET)`）透明地支持HTTP HEAD以进行请求映射。控制器方法不需要更改。应用于的响应包装器`javax.servlet.http.HttpServlet`确保将`Content-Length` 标头设置为写入的字节数（实际上未写入响应）。

`@GetMapping`（和`@RequestMapping(method=HttpMethod.GET)`）被隐式映射到并支持HTTP HEAD。像处理HTTP GET一样处理HTTP HEAD请求，不同的是，不是写入正文，而是计算字节数并设置`Content-Length` 标头。

默认情况下，通过将`Allow`响应标头设置为所有`@RequestMapping`具有匹配URL模式的方法中列出的HTTP方法列表来处理HTTP OPTIONS 。

对于`@RequestMapping`不使用HTTP方法声明的情况，`Allow`标头设置为 `GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS`。控制器方法应该总是声明支持HTTP方法（例如，通过使用HTTP方法具体变体： `@GetMapping`，`@PostMapping`，及其他）。

您可以将`@RequestMapping`方法显式映射到HTTP HEAD和HTTP OPTIONS，但这在通常情况下不是必需的。

### 自定义注释

Spring MVC支持将[组合注释](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/core.html#beans-meta-annotations) 用于请求映射。这些注解本身是元注解， 用于以更狭窄，更具体的目的`@RequestMapping`重新声明`@RequestMapping`属性的子集（或全部）。

`@GetMapping`，`@PostMapping`，`@PutMapping`，`@DeleteMapping`，和`@PatchMapping`由注解的例子。之所以提供它们，是因为大多数控制器方法应该映射到特定的HTTP方法，而不是使用using `@RequestMapping`（默认情况下与所有HTTP方法匹配）。如果需要组合注释的示例，请查看如何声明它们。

Spring MVC还支持带有自定义请求匹配逻辑的自定义请求映射属性。这是一个更高级的选项，需要`RequestMappingHandlerMapping`对`getCustomMethodCondition`方法进行子类化 和覆盖，您可以在其中检查custom属性并返回您自己的方法`RequestCondition`。

### 明确注册

您可以以编程方式注册处理程序方法，这些方法可用于动态注册或高级案例，例如同一处理程序在不同URL下的不同实例。下面的示例注册一个处理程序方法：

```java
@Configuration
public class MyConfig {

    @Autowired
    public void setHandlerMapping(RequestMappingHandlerMapping mapping, UserHandler handler) 
            throws NoSuchMethodException {

        RequestMappingInfo info = RequestMappingInfo
                .paths("/user/{id}").methods(RequestMethod.GET).build(); 

        Method method = UserHandler.class.getMethod("getUser", Long.class); 

        mapping.registerMapping(info, handler, method); 
    }
}
```

注入目标处理程序和控制器的处理程序映射。    准备请求映射元数据。    获取处理程序方法。    添加注册。

## 2、处理程序方法

`@RequestMapping` 处理程序方法具有灵活的签名，可以从支持的控制器方法参数和返回值的范围中进行选择。

### 方法参数

下表描述了受支持的控制器方法参数。任何参数均不支持反应性类型。

JDK 8次的`java.util.Optional`被支撑作为组合的方法的参数与具有注解`required`的属性（例如，`@RequestParam`，`@RequestHeader`，和其它物质）和相当于`required=false`。

| 控制器方法参数| 描述 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `WebRequest`， `NativeWebRequest`           | 通用访问请求参数以及请求和会话属性，而无需直接使用Servlet API。 |
| `javax.servlet.ServletRequest`， `javax.servlet.ServletResponse` | 选择任何特定的请求或响应类型-例如`ServletRequest`，`HttpServletRequest`或春天的`MultipartRequest`，`MultipartHttpServletRequest`。 |
| `javax.servlet.http.HttpSession`                             | 强制会话的存在。结果，这种论据永远不会`null`。请注意，会话访问不是线程安全的。考虑将`RequestMappingHandlerAdapter`实例的`synchronizeOnSession`标志设置 为`true`是否允许多个请求同时访问会话。 |
| `javax.servlet.http.PushBuilder`                             | 用于程序化HTTP / 2资源推送的Servlet 4.0推送构建器API。请注意，根据Servlet规范，`PushBuilder`如果客户端不支持HTTP / 2功能，则注入的实例可以为null。 |
| `java.security.Principal`                                    | 当前经过身份验证的用户-可能是特定的`Principal`实现类（如果已知）。 |
| `HttpMethod`                                                 | 请求的HTTP方法。                                             |
| `java.util.Locale`                                           | 当前请求的语言环境，由最具体的`LocaleResolver`可用语言（实际上是配置的`LocaleResolver`或`LocaleContextResolver`）确定。 |
| `java.util.TimeZone` + `java.time.ZoneId`                    | 与当前请求关联的时区，由决定`LocaleContextResolver`。        |
| `java.io.InputStream`， `java.io.Reader`                     | 用于访问Servlet API公开的原始请求正文。                      |
| `java.io.OutputStream`， `java.io.Writer`                    | 用于访问Servlet API公开的原始响应正文。                      |
| `@PathVariable`                                              | 用于访问URI模板变量。请参阅[URI模式](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestmapping-uri-templates)。 |
| `@MatrixVariable`                                            | 用于访问URI路径段中的名称/值对。请参阅[矩阵变量](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-matrix-variables)。 |
| `@RequestParam`                                              | 用于访问Servlet请求参数，包括多部分文件。参数值将转换为声明的方法参数类型。参见[`@RequestParam`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestparam)以及[Multipart](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-multipart-forms)。请注意，`@RequestParam`对于简单参数值，使用可选。请参阅此表末尾的“其他任何参数”。 |
| `@RequestHeader`                                             | 用于访问请求标头。标头值将转换为声明的方法参数类型。请参阅[`@RequestHeader`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestheader)。 |
| `@CookieValue`                                               | 用于访问cookie。Cookies值将转换为声明的方法参数类型。请参阅[`@CookieValue`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-cookievalue)。 |
| `@RequestBody`                                               | 用于访问HTTP请求正文。正文内容通过使用`HttpMessageConverter`实现转换为声明的方法参数类型。请参阅[`@RequestBody`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestbody)。 |
| `HttpEntity<B>`                                              | 用于访问请求标头和正文。主体用转换`HttpMessageConverter`。参见[HttpEntity](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-httpentity)。 |
| `@RequestPart`                                               | 要访问`multipart/form-data`请求中的零件，请使用转换零件的主体`HttpMessageConverter`。参见[多部分](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-multipart-forms)。 |
| `java.util.Map`，`org.springframework.ui.Model`，`org.springframework.ui.ModelMap` | 用于访问HTML控制器中使用的模型，并作为视图渲染的一部分公开给模板。 |
| `RedirectAttributes`                                         | 指定在重定向的情况下使用的属性（即追加到查询字符串中），并指定要临时存储的属性，直到重定向后的请求为止。请参阅[重定向属性](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-redirecting-passing-data)和[Flash属性](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-flash-attributes)。 |
| `@ModelAttribute`                                            | 用于访问模型中的现有属性（如果不存在，则进行实例化），并应用数据绑定和验证。请参见[`@ModelAttribute`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-modelattrib-method-args)以及 [模型](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-modelattrib-methods)和[`DataBinder`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-initbinder)。请注意，使用of `@ModelAttribute`是可选的（例如，设置其属性）。请参阅此表末尾的“其他任何参数”。 |
| `Errors`， `BindingResult`                                   | 用于访问命令对象（即`@ModelAttribute`自变量）的验证和数据绑定中的错误，`@RequestBody`或访问a 或自 `@RequestPart`变量的验证中的错误。您必须在经过验证的方法参数之后立即声明`Errors`或`BindingResult`参数。 |
| `SessionStatus` +班级 `@SessionAttributes`                   | 为了标记表单处理完成，这将触发清除通过类级`@SessionAttributes`注释声明的会话属性。请参阅 [`@SessionAttributes`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-sessionattributes)以获取更多详细信息。 |
| `UriComponentsBuilder`                                       | 用于准备相对于当前请求的主机，端口，方案，上下文路径以及servlet映射的文字部分的URL。请参阅[URI链接](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-uri-building)。 |
| `@SessionAttribute`                                          | 与访问由于类级`@SessionAttributes`声明而存储在会话中的模型属性相反，用于访问任何会话属性。请参阅 [`@SessionAttribute`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-sessionattribute)以获取更多详细信息。 |
| `@RequestAttribute`                                          | 用于访问请求属性。请参阅[`@RequestAttribute`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestattrib)以获取更多详细信息。 |
| 任何其他论点                                                 | 如果方法参数不与此表中的任何较早值匹配，并且是简单类型（由[BeanUtils＃isSimpleProperty](https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/javadoc-api/org/springframework/beans/BeanUtils.html#isSimpleProperty-java.lang.Class-)确定 ，则将其解析为`@RequestParam`。否则，将其解析为`@ModelAttribute`。 |

##### 返回值

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-return-types)

下表描述了受支持的控制器方法返回值。所有返回值都支持反应性类型。

| 控制器方法返回值                                             | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `@ResponseBody`                                              | 返回值通过`HttpMessageConverter`实现进行转换并写入响应。请参阅[`@ResponseBody`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-responsebody)。 |
| `HttpEntity<B>`， `ResponseEntity<B>`                        | 指定完整响应（包括HTTP标头和正文）的返回值将通过`HttpMessageConverter`实现进行转换，并写入响应中。参见[ResponseEntity](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-responseentity)。 |
| `HttpHeaders`                                                | 用于返回带有标头且没有正文的响应。                           |
| `String`                                                     | 一个视图名称，将通过`ViewResolver`实现来解析，并与隐式模型一起使用-通过命令对象和`@ModelAttribute`方法确定。处理程序方法还可以通过声明`Model`参数来以编程方式丰富模型（请参见[显式注册](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestmapping-registration)）。 |
| `View`                                                       | 甲`View`实例以使用用于与所述隐式模型一起渲染-通过命令对象和确定`@ModelAttribute`方法。处理程序方法还可以通过声明`Model`参数来以编程方式丰富模型（请参见[显式注册](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestmapping-registration)）。 |
| `java.util.Map`， `org.springframework.ui.Model`             | 要添加到隐式模型的属性，视图名称通过隐式确定`RequestToViewNameTranslator`。 |
| `@ModelAttribute`                                            | 要添加到模型的属性，视图名称通过隐式确定`RequestToViewNameTranslator`。请注意，这`@ModelAttribute`是可选的。请参阅此表末尾的“其他任何返回值”。 |
| `ModelAndView` 宾语                                          | 要使用的视图和模型属性，以及响应状态（可选）。               |
| `void`                                                       | 如果具有`void`返回类型（或`null`返回值）的方法还具有`ServletResponse`，`OutputStream`参数或`@ResponseStatus`注释，则认为该方法已完全处理了响应。如果控制器进行了肯定检查`ETag`或`lastModified`时间戳检查，则情况也是如此 （有关详细信息，请参阅[控制器](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-caching-etag-lastmodified)）。如果以上条件都不成立，则`void`返回类型还可以为REST控制器指示“无响应正文”，或者为HTML控制器指示默认视图名称选择。 |
| `DeferredResult<V>`                                          | 从任何线程异步生成任何上述返回值-例如，由于某些事件或回调的结果。请参阅[异步请求](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async)和[`DeferredResult`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async-deferredresult)。 |
| `Callable<V>`                                                | 在Spring MVC管理的线程中异步产生上述任何返回值。请参阅[异步请求](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async)和[`Callable`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async-callable)。 |
| `ListenableFuture<V>`， `java.util.concurrent.CompletionStage<V>`， `java.util.concurrent.CompletableFuture<V>` | 为了`DeferredResult`方便起见，替代，（例如，当基础服务返回其中之一时）。 |
| `ResponseBodyEmitter`， `SseEmitter`                         | 异步发出对象流，以通过`HttpMessageConverter`实现将其写入响应 。也支持作为的主体`ResponseEntity`。请参阅[异步请求](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async)和[HTTP流](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async-http-streaming)。 |
| `StreamingResponseBody`                                      | `OutputStream`异步写入响应。也支持作为的主体 `ResponseEntity`。请参阅[异步请求](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async)和[HTTP流](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async-http-streaming)。 |
| 反应类型-Reactor，RxJava或其他类型 `ReactiveAdapterRegistry` | 替代收集到的`DeferredResult`多值流（例如`Flux`，`Observable`）`List`。用于流式传输的场景（例如，`text/event-stream`，`application/json+stream`）， `SseEmitter`和`ResponseBodyEmitter`被用来代替，其中`ServletOutputStream` 阻塞I / O是在一个Spring MVC管理线程执行和被施加针对每个写入的完成背压。请参阅[异步请求](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async)和[响应类型](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async-reactive-types)。 |
| 任何其他返回值                                               | 如果返回值不是由[BeanUtils＃isSimpleProperty](https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/javadoc-api/org/springframework/beans/BeanUtils.html#isSimpleProperty-java.lang.Class-)确定的简单类型，则该返回值与该表中的任何较早值都不匹配并且是a `String`或被`void`视为视图名称（通过`RequestToViewNameTranslator`应用默认视图名称选择 ） 。简单类型的值仍然无法解析。 |

##### 类型转换

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-typeconversion)

表示一些注解的控制器方法的参数`String`为基础的请求输入（如 `@RequestParam`，`@RequestHeader`，`@PathVariable`，`@MatrixVariable`，和`@CookieValue`）可以要求类型转换如果参数被声明为比其它的东西`String`。

在这种情况下，将根据配置的转换器自动应用类型转换。默认情况下，简单的类型（`int`，`long`，`Date`，和其他人）的支持。您可以通过自定义类型转换`WebDataBinder`（见[`DataBinder`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-initbinder)），或者通过注册 `Formatters`与`FormattingConversionService`。参见[Spring字段格式化](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/core.html#format)。

##### 矩阵变量

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-matrix-variables)

[RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.3)讨论了路径段中的名称/值对。在Spring MVC中，基于Tim Berners-Lee 的[“旧帖子”](https://www.w3.org/DesignIssues/MatrixURIs.html)，我们将其称为“矩阵变量” ，但它们也可以称为URI路径参数。

矩阵变量可以出现在任何路径段中，每个变量用分号分隔，多个值用逗号分隔（例如`/cars;color=red,green;year=2012`）。也可以通过重复的变量名称（例如`color=red;color=green;color=blue`）来指定多个值 。

如果期望URL包含矩阵变量，则控制器方法的请求映射必须使用URI变量来屏蔽该变量内容，并确保可以成功地匹配请求，而与矩阵变量的顺序和状态无关。以下示例使用矩阵变量：

爪哇

科特林

```java
// GET /pets/42;q=11;r=22

@GetMapping("/pets/{petId}")
public void findPet(@PathVariable String petId, @MatrixVariable int q) {

    // petId == 42
    // q == 11
}
```

鉴于所有路径段都可能包含矩阵变量，因此有时您可能需要消除矩阵变量应位于哪个路径变量的歧义。以下示例说明了如何做到这一点：

爪哇

科特林

```java
// GET /owners/42;q=11/pets/21;q=22

@GetMapping("/owners/{ownerId}/pets/{petId}")
public void findPet(
        @MatrixVariable(name="q", pathVar="ownerId") int q1,
        @MatrixVariable(name="q", pathVar="petId") int q2) {

    // q1 == 11
    // q2 == 22
}
```

可以将矩阵变量定义为可选变量，并指定默认值，如以下示例所示：

爪哇

科特林

```java
// GET /pets/42

@GetMapping("/pets/{petId}")
public void findPet(@MatrixVariable(required=false, defaultValue="1") int q) {

    // q == 1
}
```

要获取所有矩阵变量，可以使用`MultiValueMap`，如以下示例所示：

爪哇

科特林

```java
// GET /owners/42;q=11;r=12/pets/21;q=22;s=23

@GetMapping("/owners/{ownerId}/pets/{petId}")
public void findPet(
        @MatrixVariable MultiValueMap<String, String> matrixVars,
        @MatrixVariable(pathVar="petId") MultiValueMap<String, String> petMatrixVars) {

    // matrixVars: ["q" : [11,22], "r" : 12, "s" : 23]
    // petMatrixVars: ["q" : 22, "s" : 23]
}
```

请注意，您需要启用矩阵变量的使用。在MVC Java配置中，您需要通过 [路径匹配](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config-path-matching)设置`UrlPathHelper`with 。在MVC XML名称空间中，可以设置 。`removeSemicolonContent=false``<mvc:annotation-driven enable-matrix-variables="true"/>`

##### `@RequestParam`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-requestparam)

您可以使用`@RequestParam`批注将Servlet请求参数（即查询参数或表单数据）绑定到控制器中的方法参数。

以下示例显示了如何执行此操作：

爪哇

科特林

```java
@Controller
@RequestMapping("/pets")
public class EditPetForm {

    // ...

    @GetMapping
    public String setupForm(@RequestParam("petId") int petId, Model model) { 
        Pet pet = this.clinic.loadPet(petId);
        model.addAttribute("pet", pet);
        return "petForm";
    }

    // ...

}
```

|      | 使用`@RequestParam`绑定`petId`。 |
| ---- | -------------------------------- |
|      |                                  |

默认情况下，使用此批注的方法参数是必需的，但是您可以通过将`@RequestParam`批注的`required`标志设置为 `false`或通过使用`java.util.Optional`包装器声明参数来指定方法参数是可选的。

如果目标方法参数类型不是，则类型转换将自动应用 `String`。请参阅[类型转换](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-typeconversion)。

将参数类型声明为数组或列表，可以为同一参数名称解析多个参数值。

如果将`@RequestParam`注释声明为`Map<String, String>`或 `MultiValueMap<String, String>`，而在注释中未指定参数名称，则将使用每个给定参数名称的请求参数值填充映射。

请注意，使用of `@RequestParam`是可选的（例如，设置其属性）。默认情况下，任何简单值类型的参数（由[BeanUtils＃isSimpleProperty](https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/javadoc-api/org/springframework/beans/BeanUtils.html#isSimpleProperty-java.lang.Class-)确定 ），并且没有被任何其他参数解析器解析，就如同使用注释一样`@RequestParam`。

##### `@RequestHeader`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-requestheader)

您可以使用`@RequestHeader`注释将请求标头绑定到控制器中的方法参数。

考虑以下带有标头的请求：

```
主机localhost：8080 
接受text / html，application / xhtml + xml，application / xml; q = 0.9 
Accept-Language fr，en-gb; q = 0.7，en; q = 0.3 
Accept-Encoding gzip，deflate 
Accept-Charset ISO -8859-1，utf-8; q = 0.7，*; q = 0.7 
Keep-Alive 300
```

以下示例获取`Accept-Encoding`和`Keep-Alive`标头的值：

爪哇

科特林

```java
@GetMapping("/demo")
public void handle(
        @RequestHeader("Accept-Encoding") String encoding, 
        @RequestHeader("Keep-Alive") long keepAlive) { 
    //...
}
```

|      | 获取`Accept-Encoding`标头的值。 |
| ---- | ------------------------------- |
|      | 获取`Keep-Alive`标头的值。      |

如果目标方法的参数类型不是`String`，则将 自动应用类型转换。请参阅[类型转换](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-typeconversion)。

当`@RequestHeader`注解上的使用`Map<String, String>`， `MultiValueMap<String, String>`或`HttpHeaders`参数，则地图被填充有所有标头值。

|      | 内置支持可用于将逗号分隔的字符串转换为数组或字符串集合或类型转换系统已知的其他类型。例如，用注释的方法参数`@RequestHeader("Accept")`可以是type `String`，也可以是 `String[]`or `List<String>`。 |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

##### `@CookieValue`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-cookievalue)

您可以使用`@CookieValue`注释将HTTP cookie的值绑定到控制器中的方法参数。

考虑带有以下cookie的请求：

```
JSESSIONID = 415A4AC178C59DACE0B2C9CA727CDD84
```

以下示例显示如何获取cookie值：

爪哇

科特林

```java
@GetMapping("/demo")
public void handle(@CookieValue("JSESSIONID") String cookie) { 
    //...
}
```

|      | 获取`JSESSIONID`cookie 的值。 |
| ---- | ----------------------------- |
|      |                               |

如果目标方法的参数类型不是`String`，则类型转换将自动应用。请参阅[类型转换](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-typeconversion)。

##### `@ModelAttribute`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-modelattrib-method-args)

您可以`@ModelAttribute`在方法参数上使用注释，以从模型访问属性，或者将其实例化（如果不存在）。model属性还覆盖了名称与字段名称匹配的HTTP Servlet请求参数中的值。这称为数据绑定，它使您不必处理解析和转换单个查询参数和表单字段的工作。以下示例显示了如何执行此操作：

爪哇

科特林

```java
@PostMapping("/owners/{ownerId}/pets/{petId}/edit")
public String processSubmit(@ModelAttribute Pet pet) { } 
```

|      | 绑定的实例`Pet`。 |
| ---- | ----------------- |
|      |                   |

`Pet`上面的实例解析如下：

- 从模型（如果已使用[Model](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-modelattrib-methods)添加）。
- 通过使用HTTP会话[`@SessionAttributes`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-sessionattributes)。
- 从URI路径变量通过传递`Converter`（请参见下一个示例）。
- 从默认构造函数的调用开始。
- 从调用具有与Servlet请求参数匹配的参数的“主要构造函数”开始。参数名称是通过JavaBeans `@ConstructorProperties`或字节码中运行时保留的参数名称确定的。

虽然通常使用[模型](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-modelattrib-methods)来用属性填充模型，但是另一种替代方法是依赖于`Converter<String, T>`URI路径变量约定的组合。在以下示例中，模型属性名称 `account`匹配URI路径变量`account`，并且`Account`通过将`String`帐号传递给注册的来加载`Converter<String, Account>`：

爪哇

科特林

```java
@PutMapping("/accounts/{account}")
public String save(@ModelAttribute("account") Account account) {
    // ...
}
```

获取模型属性实例后，将应用数据绑定。所述 `WebDataBinder`类servlet请求参数名（查询参数和表单字段）以在目标字段名称匹配`Object`。必要时在应用类型转换后填充匹配字段。有关数据绑定（和验证）的更多信息，请参见 [验证](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/core.html#validation)。有关自定义数据绑定的更多信息，请参见 [`DataBinder`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-initbinder)。

数据绑定可能导致错误。默认情况下，`BindException`引发a。但是，要检查controller方法中的此类错误，可以在`BindingResult`旁边紧紧添加一个参数`@ModelAttribute`，如以下示例所示：

爪哇

科特林

```java
@PostMapping("/owners/{ownerId}/pets/{petId}/edit")
public String processSubmit(@ModelAttribute("pet") Pet pet, BindingResult result) { 
    if (result.hasErrors()) {
        return "petForm";
    }
    // ...
}
```

|      | 在`BindingResult`旁边添加一个`@ModelAttribute`。 |
| ---- | ------------------------------------------------ |
|      |                                                  |

在某些情况下，您可能希望访问没有数据绑定的模型属性。在这种情况下，您可以将注入`Model`到控制器中并直接访问它，或者设置`@ModelAttribute(binding=false)`，如以下示例所示：

爪哇

科特林

```java
@ModelAttribute
public AccountForm setUpForm() {
    return new AccountForm();
}

@ModelAttribute
public Account findAccount(@PathVariable String accountId) {
    return accountRepository.findOne(accountId);
}

@PostMapping("update")
public String update(@Valid AccountForm form, BindingResult result,
        @ModelAttribute(binding=false) Account account) { 
    // ...
}
```

|      | 设置`@ModelAttribute(binding=false)`。 |
| ---- | -------------------------------------- |
|      |                                        |

您可以通过添加`javax.validation.Valid`注释或Spring的`@Validated`注释（ [Bean验证](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/core.html#validation-beanvalidation)和 [Spring验证](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/core.html#validation)）在数据绑定之后自动应用验证 。以下示例显示了如何执行此操作：

爪哇

科特林

```java
@PostMapping("/owners/{ownerId}/pets/{petId}/edit")
public String processSubmit(@Valid @ModelAttribute("pet") Pet pet, BindingResult result) { 
    if (result.hasErrors()) {
        return "petForm";
    }
    // ...
}
```

|      | 验证`Pet`实例。 |
| ---- | --------------- |
|      |                 |

请注意，using `@ModelAttribute`是可选的（例如，设置其属性）。默认情况下，任何不是简单值类型（由[BeanUtils＃isSimpleProperty](https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/javadoc-api/org/springframework/beans/BeanUtils.html#isSimpleProperty-java.lang.Class-)确定 ）且未被其他任何参数解析器解析的参数都将被视为带有`@ModelAttribute`。

##### `@SessionAttributes`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-sessionattributes)

`@SessionAttributes`用于在请求之间的HTTP Servlet会话中存储模型属性。它是类型级别的注释，用于声明特定控制器使用的会话属性。这通常列出应透明地存储在会话中以供后续访问请求的模型属性的名称或模型属性的类型。

以下示例使用`@SessionAttributes`注释：

爪哇

科特林

```java
@Controller
@SessionAttributes("pet") 
public class EditPetForm {
    // ...
}
```

|      | 使用`@SessionAttributes`注释。 |
| ---- | ------------------------------ |
|      |                                |

在第一个请求上，将名称为的模型属性`pet`添加到模型时，该属性会自动提升到HTTP Servlet会话并保存在该会话中。它会一直保留在那里，直到另一个控制器方法使用`SessionStatus`方法参数来清除存储，如以下示例所示：

爪哇

科特林

```java
@Controller
@SessionAttributes("pet") 
public class EditPetForm {

    // ...

    @PostMapping("/pets/{id}")
    public String handle(Pet pet, BindingResult errors, SessionStatus status) {
        if (errors.hasErrors) {
            // ...
        }
            status.setComplete(); 
            // ...
        }
    }
}
```

|      | 将`Pet`值存储在Servlet会话中。 |
| ---- | ------------------------------ |
|      | `Pet`从Servlet会话中清除值。   |

##### `@SessionAttribute`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-sessionattribute)

如果您需要访问全局存在（即在控制器外部（例如，通过过滤器）管理）并且可能存在或可能不存在的预先存在的会话属性，则可以`@SessionAttribute`在方法参数上使用注释，如下所示示例显示：

爪哇

科特林

```java
@RequestMapping("/")
public String handle(@SessionAttribute User user) { 
    // ...
}
```

|      | 使用`@SessionAttribute`注释。 |
| ---- | ----------------------------- |
|      |                               |

对于需要添加或删除会话属性的用例，请考虑将其注入 `org.springframework.web.context.request.WebRequest`或 `javax.servlet.http.HttpSession`注入到控制器方法中。

要将模型属性临时存储在会话中作为控制器工作流程的一部分，请考虑使用`@SessionAttributes`中所述 [`@SessionAttributes`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-sessionattributes)。

##### `@RequestAttribute`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-requestattrib)

与相似`@SessionAttribute`，您可以使用`@RequestAttribute`批注来访问先前创建的预先存在的请求属性（例如，通过Servlet `Filter` 或`HandlerInterceptor`）：

爪哇

科特林

```java
@GetMapping("/")
public String handle(@RequestAttribute Client client) { 
    // ...
}
```

|      | 使用`@RequestAttribute`注释。 |
| ---- | ----------------------------- |
|      |                               |

##### 重定向属性

默认情况下，所有模型属性均被视为在重定向URL中作为URI模板变量公开。在其余属性中，那些属于原始类型或原始类型的集合或数组的属性会自动附加为查询参数。

如果专门为重定向准备了模型实例，则将原始类型属性作为查询参数附加可能是理想的结果。但是，在带注释的控制器中，模型可以包含为渲染目的添加的其他属性（例如，下拉字段值）。为避免此类属性出现在URL中的可能性，`@RequestMapping`方法可以声明类型的参数，`RedirectAttributes`并使用它来指定要提供给的确切属性`RedirectView`。如果该方法确实重定向，`RedirectAttributes`则使用的内容。否则，将使用模型的内容。

在`RequestMappingHandlerAdapter`提供了一个名为标志 `ignoreDefaultModelOnRedirect`，你可以用它来表示默认的内容 `Model`不应该，如果一个控制器方法重定向使用。相反，控制器方法应该声明一个类型的属性，`RedirectAttributes`或者如果没有声明，则不应将任何属性传递给`RedirectView`。MVC名称空间和MVC Java配置都将此标志设置为`false`，以保持向后兼容性。但是，对于新应用程序，我们建议将其设置为`true`。

请注意，展开重定向URL时，本请求中的URI模板变量将自动变为可用，并且您无需通过`Model`或显式添加它们`RedirectAttributes`。以下示例显示了如何定义重定向：

爪哇

科特林

```java
@PostMapping("/files/{path}")
public String upload(...) {
    // ...
    return "redirect:files/{path}";
}
```

将数据传递到重定向目标的另一种方法是使用闪存属性。与其他重定向属性不同，闪存属性保存在HTTP会话中（因此不会出现在URL中）。有关更多信息，请参见[Flash属性](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-flash-attributes)。

##### Flash属性

Flash属性为一个请求提供了一种存储要在另一个请求中使用的属性的方式。重定向时最常需要此功能，例如Post-Redirect-Get模式。Flash属性在重定向之前（通常在会话中）被临时保存，以便在重定向之后可供请求使用，并立即被删除。

Spring MVC有两个主要的抽象来支持Flash属性。`FlashMap`用于保存Flash属性，而`FlashMapManager`用于存储，检索和管理 `FlashMap`实例。

Flash属性支持始终处于“打开”状态，无需显式启用。但是，如果不使用它，则永远不会导致HTTP会话创建。在每个请求上，都有一个“输入” `FlashMap`，该属性具有从前一个请求（如果有）传递过来的属性，而“输出”则`FlashMap`具有为后续请求保存的属性。`FlashMap` 可通过Spring中的静态方法从Spring MVC中的任何位置访问这两个实例 `RequestContextUtils`。

带注释的控制器通常不需要`FlashMap`直接使用。取而代之的是， `@RequestMapping`方法可以接受类型的参数，`RedirectAttributes`并使用它为重定向方案添加Flash属性。通过添加的Flash属性将 `RedirectAttributes`自动传播到“输出” FlashMap。同样，重定向后，来自“输入”的属性`FlashMap`会自动添加到 `Model`服务于目标URL的控制器的。

将请求与Flash属性匹配

Flash属性的概念存在于许多其他Web框架中，并已证明有时会遇到并发问题。这是因为根据定义，闪存属性将存储到下一个请求。但是，“下一个”请求可能不是预期的接收者，而是另一个异步请求（例如，轮询或资源请求），在这种情况下，过早删除闪存属性。

为了减少此类问题的可能性，请使用目标重定向URL的路径和查询参数`RedirectView`自动“标记” `FlashMap`实例。反过来，默认值`FlashMapManager`在查找“输入”时会将信息与传入请求匹配`FlashMap`。

这不能完全消除并发问题的可能性，但可以通过重定向URL中已经可用的信息大大减少并发问题。因此，我们建议您主要将Flash属性用于重定向方案。

##### 多部分

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-multipart-forms)

一个后`MultipartResolver`已经[启用](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-multipart)，POST的内容与要求`multipart/form-data`进行解析，并定期请求参数进行访问。以下示例访问一个常规表单字段和一个上载文件：

爪哇

科特林

```java
@Controller
public class FileUploadController {

    @PostMapping("/form")
    public String handleFormUpload(@RequestParam("name") String name,
            @RequestParam("file") MultipartFile file) {

        if (!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            // store the bytes somewhere
            return "redirect:uploadSuccess";
        }
        return "redirect:uploadFailure";
    }
}
```

将参数类型声明为a `List<MultipartFile>`可以解析相同参数名称的多个文件。

如果将`@RequestParam`注释声明为a `Map<String, MultipartFile>`或 `MultiValueMap<String, MultipartFile>`，而在注释中未指定参数名称，则将使用每个给定参数名称的多部分文件填充映射。

|      | 使用Servlet 3.0多部分解析时，您还可以声明`javax.servlet.http.Part` Spring而不是Spring `MultipartFile`作为方法参数或集合值类型。 |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

您还可以将多部分内容用作绑定到[命令对象](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-modelattrib-method-args)的数据的一部分 。例如，前面示例中的表单字段和文件可以是表单对象上的字段，如以下示例所示：

爪哇

科特林

```java
class MyForm {

    private String name;

    private MultipartFile file;

    // ...
}

@Controller
public class FileUploadController {

    @PostMapping("/form")
    public String handleFormUpload(MyForm form, BindingResult errors) {
        if (!form.getFile().isEmpty()) {
            byte[] bytes = form.getFile().getBytes();
            // store the bytes somewhere
            return "redirect:uploadSuccess";
        }
        return "redirect:uploadFailure";
    }
}
```

在RESTful服务方案中，也可以从非浏览器客户端提交多部分请求。以下示例显示了带有JSON的文件：

```
POST / someUrl 
内容类型：multipart / mixed 

--edt7Tfrdusa7r3lNQc79vXuhIIMlatb7PQg7Vp 
内容处置：form-data; name =“元数据” 
Content-Type：application / json; charset = UTF-8 
Content-Transfer-Encoding：8bit 

{ 
    “ name”：“ value” 
} 
--edt7Tfrdusa7r3lNQc79vXuhIIMlatb7PQg7Vp 
Content-Disposition：表单数据；name =“文件数据”; filename =“ file.properties” 
内容类型：text / xml 
内容传输编码：8位
...文件数据...
```

您可以通过访问“元数据”部分`@RequestParam`的`String`，但你可能会想从JSON反序列化（类似`@RequestBody`）。在使用[HttpMessageConverter](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/integration.html#rest-message-conversion)`@RequestPart`将注释转换为多部分后，可使用 注释来访问它 ：

爪哇

科特林

```java
@PostMapping("/")
public String handle(@RequestPart("meta-data") MetaData metadata,
        @RequestPart("file-data") MultipartFile file) {
    // ...
}
```

您可以将其`@RequestPart`与`javax.validation.Valid`Spring的`@Validated`注释结合使用或一起使用 ，这两种注释都会导致应用标准Bean验证。默认情况下，验证错误会导致`MethodArgumentNotValidException`，并变成400（BAD_REQUEST）响应。或者，您可以通过`Errors`或`BindingResult`参数在控制器内本地处理验证错误，如以下示例所示：

爪哇

科特林

```java
@PostMapping("/")
public String handle(@Valid @RequestPart("meta-data") MetaData metadata,
        BindingResult result) {
    // ...
}
```

##### `@RequestBody`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-requestbody)

您可以使用`@RequestBody`注释有请求体读取和反序列化到一个 `Object`通过[`HttpMessageConverter`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/integration.html#rest-message-conversion)。以下示例使用一个`@RequestBody`参数：

爪哇

科特林

```java
@PostMapping("/accounts")
public void handle(@RequestBody Account account) {
    // ...
}
```

您可以使用[MVC Config](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config)的“ [消息转换器”](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config-message-converters)选项来配置或自定义消息转换。

可以`@RequestBody`与`javax.validation.Valid`或Spring的 `@Validated`注释结合使用，这两种注释都会导致应用标准Bean验证。默认情况下，验证错误会导致`MethodArgumentNotValidException`，并变成400（BAD_REQUEST）响应。或者，您可以通过`Errors`或`BindingResult`参数在控制器内本地处理验证错误，如以下示例所示：

爪哇

科特林

```java
@PostMapping("/accounts")
public void handle(@Valid @RequestBody Account account, BindingResult result) {
    // ...
}
```

##### HttpEntity

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-httpentity)

`HttpEntity`与使用大致相同，[`@RequestBody`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-requestbody)但基于公开请求标头和正文的容器对象。以下清单显示了一个示例：

爪哇

科特林

```java
@PostMapping("/accounts")
public void handle(HttpEntity<Account> entity) {
    // ...
}
```

##### `@ResponseBody`

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-responsebody)

您可以`@ResponseBody`在方法上使用注释，以使返回值通过[HttpMessageConverter](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/integration.html#rest-message-conversion)序列化为响应主体 。以下清单显示了一个示例：

爪哇

科特林

```java
@GetMapping("/accounts/{id}")
@ResponseBody
public Account handle() {
    // ...
}
```

`@ResponseBody`在类级别也受支持，在这种情况下，它由所有控制器方法继承。这就是的效果`@RestController`，无非就是带有`@Controller`和标记的元注释`@ResponseBody`。

您可以使用`@ResponseBody`反应类型。有关更多详细信息，[请](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async)参见[异步请求](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async)和[响应类型](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async-reactive-types)。

您可以使用[MVC Config](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config)的“ [消息转换器”](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-config-message-converters)选项来配置或自定义消息转换。

您可以将`@ResponseBody`方法与JSON序列化视图结合使用。有关详细信息，请参见[Jackson JSON](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-jackson)。

##### 响应实体

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-responseentity)

`ResponseEntity`就像[`@ResponseBody`](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-responsebody)但带有状态和标题。例如：

爪哇

科特林

```java
@GetMapping("/something")
public ResponseEntity<String> handle() {
    String body = ... ;
    String etag = ... ;
    return ResponseEntity.ok().eTag(etag).build(body);
}
```

Spring MVC支持使用单值[反应类型](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web.html#mvc-ann-async-reactive-types) 来`ResponseEntity`为主体生成异步和/或单值和多值反应类型。

##### 杰克逊JSON

Spring提供了对Jackson JSON库的支持。

###### JSON视图

[与Spring WebFlux中的相同](https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/web-reactive.html#webflux-ann-jsonview)

Spring MVC为[Jackson的序列化视图](https://www.baeldung.com/jackson-json-view-annotation)提供了内置支持 ，该[视图](https://www.baeldung.com/jackson-json-view-annotation)仅允许呈现。中所有字段的子集`Object`。要将其与 `@ResponseBody`或`ResponseEntity`控制器方法一起使用，可以使用Jackson的 `@JsonView`注释来激活序列化视图类，如以下示例所示：

爪哇

科特林

```java
@RestController
public class UserController {

    @GetMapping("/user")
    @JsonView(User.WithoutPasswordView.class)
    public User getUser() {
        return new User("eric", "7!jd#h23");
    }
}

public class User {

    public interface WithoutPasswordView {};
    public interface WithPasswordView extends WithoutPasswordView {};

    private String username;
    private String password;

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    @JsonView(WithoutPasswordView.class)
    public String getUsername() {
        return this.username;
    }

    @JsonView(WithPasswordView.class)
    public String getPassword() {
        return this.password;
    }
}
```

|      | `@JsonView`允许一组视图类，但是每个控制器方法只能指定一个。如果需要激活多个视图，则可以使用复合界面。 |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

对于依赖视图分辨率的控制器，可以将序列化视图类添加到模型中，如以下示例所示：

爪哇

科特林

```java
@Controller
public class UserController extends AbstractController {

    @GetMapping("/user")
    public String getUser(Model model) {
        model.addAttribute("user", new User("eric", "7!jd#h23"));
        model.addAttribute(JsonView.class.getName(), User.WithoutPasswordView.class);
        return "userView";
    }
}
```