# 泛型

## 1、? 通配符

- 常用的是<? extends XXX>或者<? super XXX>两种，带有上下界的通配符。

## 2、T

- （泛型方法的类型限定）

	```java
	<T extends SomeClass & interface1 & interface2 & interface3>
	```

- （泛型类中类型参数的限制）

	```java
	public class Demo<T extends Comparable & Serializable> {  
	    // T类型就可以用Comparable声明的方法和Seriablizable所拥有的特性了  
	}
	```

## 3、Object

- List本身是个泛型类，现在我们指定它接收Object类型的参数，此时就可以放置任意类型的参数进去，而在取出来是就必须得进行强制类型转换成具体的类型。

- 如果将List指定接收String类型的参数，那么这个List就只能放置String类型，且取出来时就不用进行强制类型转换。

# Super();

> 子类继承父类所有方法

## 父类

```java
public class Father {
    public Father() {
        System.out.println("Father的无参构造方法");
    }

    public Father(int i) {
        System.out.println("Father的有参构造方法" + i);
    }

    public static void main(String[] args) {
        Father father = new Father();
        System.out.println(father);
    }
}
```

## 子类继承父类

```java
public class Son extends Father {
    public Son() {
        super();	// 调用该方法时会直接调用父类的方法
        System.out.println("Son的无参构造方法");
    }

    public static void main(String[] args) {
        Son son = new Son();
        System.out.println(son);
    }
}
```

# java复制文件

## 1、FileStreams 复制

```java
private static void copyFileUsingFileStreams(File source, File dest)
    throws IOException {  
    InputStream input = null;  
    OutputStream output = null;  
    try {
        input = new FileInputStream(source);
        output = new FileOutputStream(dest);    
        byte[] buf = new byte[1024];    
        int bytesRead;    
        while ((bytesRead = input.read(buf)) > 0) {
            output.write(buf, 0, bytesRead);
        }
    } finally {
        input.close();
        output.close();
    }
}
```

## 2、FileChannel复制

```java
private static void copyFileUsingFileChannels(File source, File dest) throws IOException {  
    FileChannel inputChannel = null;  
    FileChannel outputChannel = null;  
    try {
        inputChannel = new FileInputStream(source).getChannel();
        outputChannel = new FileOutputStream(dest).getChannel();
        outputChannel.transferFrom(inputChannel, 0, inputChannel.size());
    } finally {
        inputChannel.close();
        outputChannel.close();
    }
}
```

## 3、Commons IO复制

```java
private static void copyFileUsingApacheCommonsIO(File source, File dest)
    throws IOException {
    FileUtils.copyFile(source, dest);
}
```

## 4、Java7的Files类复制

```java
private static void copyFileUsingJava7Files(File source, File dest)
    throws IOException {  
    Files.copy(source.toPath(), dest.toPath());
}
```

## 5、测试

现在看到这些方法中的哪一个是更高效的,我们会复制一个大文件使用每一个在一个简单的程序。 从缓存来避免任何性能明显我们将使用四个不同的源文件和四种不同的目标文件。 让我们看一下代码

```java
Time taken by FileStreams Copy = 127572360
Time taken by FileChannels Copy = 10449963
Time taken by Java7 Files Copy = 10808333
Time taken by Apache Commons IO Copy = 17971677
```

